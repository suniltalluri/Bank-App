import './index.css'

const DenominationItem = props => {
  const {id, eachDenomination, clickDenomination} = props
  const {value} = eachDenomination

  const onClickBtn = () => {
    clickDenomination(value)
  }
  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickBtn}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
