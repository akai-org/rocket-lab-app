import s from './RocketSpinner.module.scss'

const RocketSpinner = () => {
  return (
    <div className={s.moon}>
      <img
        src="https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png"
        // style="width:30px;height:20px;"
        className={s.loader}
      />
      <ul className={s.list}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default RocketSpinner
