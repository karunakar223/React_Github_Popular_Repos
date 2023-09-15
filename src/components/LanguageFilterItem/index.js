// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, newSelectedLanguageRepo, isActive} = props
  const btnClassName = isActive ? 'btn active' : 'btn'

  const onClickBtn = () => {
    newSelectedLanguageRepo(languageDetails.id)
  }

  return (
    <li>
      <button type="button" className={btnClassName} onClick={onClickBtn}>
        {languageDetails.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
