import { HistoryLog, HistoryLogType } from '../mongo/models/history'

export function createTypesMap() {
  const typesMap = new Map<HistoryLogType, string>()

  typesMap.set('added', 'Dodano do magazynu:')
  typesMap.set('distributed', 'Wyciągnięto z magazynu:')
  typesMap.set('modified', 'Zmodyfikowano w magazynie:')
  typesMap.set('removed', 'Usunięto z magazynu:')
  return typesMap
}

export function groupLogs(logs: HistoryLog[]) {
  let tmp: Date | undefined
  const futureState = new Map<string, HistoryLog[]>()

  for (const log of logs) {
    const logDate = new Date(log.createdAt)
    if (!tmp || tmp?.toDateString() === logDate.toDateString()) tmp = logDate
    if (!futureState.has(logDate.toDateString())) {
      futureState.set(logDate.toDateString(), [])
    }
    futureState.get(logDate.toDateString())?.push(log)

    tmp = logDate
  }
  return futureState
}
