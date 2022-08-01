import { useCallback, useRef, useState } from 'react'

const preventDefault = (e: Event) => {
  if (!isTouchEvent(e)) return

  if (e.touches.length < 2 && e.preventDefault) {
    e.preventDefault()
  }
}

export const isTouchEvent = (e: Event): e is TouchEvent => {
  return e && 'touches' in e
}
interface longPressGestureProps<T> {
  onLongPress: (e: React.MouseEvent<T> | React.TouchEvent<T>) => void
  delay?: number
  shouldPreventDefault?: boolean
}

export default function useLongPressGesture<T>({
  onLongPress,
  delay,
  shouldPreventDefault,
}: longPressGestureProps<T>) {
  const [longPressTriggered, setLongPressTriggered] = useState(false)
  const timeout = useRef<NodeJS.Timeout>()
  const target = useRef<EventTarget>()

  const start = useCallback(
    (e: React.MouseEvent<T> | React.TouchEvent<T>) => {
      e.persist()
      const clonedEvent = { ...e }

      if (shouldPreventDefault && e.target) {
        e.target.addEventListener('touchend', preventDefault, {
          passive: false,
        })
        target.current = e.target
      }

      timeout.current = setTimeout(() => {
        onLongPress(clonedEvent)
        setLongPressTriggered(true)
      }, delay)
    },
    [onLongPress, delay, shouldPreventDefault]
  )

  const clear = useCallback(
    (shouldTriggerClick = true) => {
      timeout.current && clearTimeout(timeout.current)
      shouldTriggerClick && !longPressTriggered

      setLongPressTriggered(false)

      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault)
      }
    },
    [shouldPreventDefault, longPressTriggered]
  )

  return {
    onMouseDown: (e: React.MouseEvent<T>) => start(e),
    onTouchStart: (e: React.TouchEvent<T>) => start(e),
    onMouseUp: (e: React.MouseEvent<T>) => clear(e),
    onMouseLeave: () => clear(false),
    onTouchEnd: (e: React.TouchEvent<T>) => clear(e),
  }
}
