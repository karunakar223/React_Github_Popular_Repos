// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryItemData} = props

  return (
    <li className="repo-item-container">
      <img
        src={repositoryItemData.avatarUrl}
        className="avatar-img"
        alt={repositoryItemData.name}
      />
      <h1 className="repo-name">{repositoryItemData.name}</h1>
      <div className="details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p className="icon-text">{repositoryItemData.starsCount} stars</p>
      </div>
      <div className="details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon"
        />
        <p className="icon-text">{repositoryItemData.forksCount} forks</p>
      </div>
      <div className="details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon"
        />
        <p className="icon-text">{repositoryItemData.issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
