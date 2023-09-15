import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    activeLanguageId: 'ALL',
    repositoriesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getRepositories(languageFiltersData[0].id)
  }

  renderLanguageFilterItem = () => {
    const {activeLanguageId} = this.state
    return (
      <ul className="language-list-container">
        {languageFiltersData.map(language => (
          <LanguageFilterItem
            key={language.id}
            languageDetails={language}
            newSelectedLanguageRepo={
              this.getSelectedLanguageCorrespondRepository
            }
            isActive={language.id === activeLanguageId}
          />
        ))}
      </ul>
    )
  }

  setRepositories = (fetchedData, loadingStatus) => {
    this.setState({
      repositoriesData: fetchedData,
      isLoading: loadingStatus,
    })
  }

  setIsLoading = loadingStatus => {
    this.setState({isLoading: loadingStatus})
  }

  getRepositories = async activeLanguageId => {
    this.setIsLoading(true)

    const res = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`,
    )
    const fetchedData = await res.json()
    const updatedData = fetchedData.popular_repos.map(eachRepo => ({
      id: eachRepo.id,
      avatarUrl: eachRepo.avatar_url,
      name: eachRepo.name,
      forksCount: eachRepo.forks_count,
      starsCount: eachRepo.stars_count,
      issuesCount: eachRepo.issues_count,
    }))
    this.setRepositories(updatedData, false)
  }

  renderRepositoriesList = () => {
    const {repositoriesData} = this.state

    return (
      <ul className="repository-item-container">
        {repositoriesData.map(repo => (
          <RepositoryItem key={repo.id} repositoryItemData={repo} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  getSelectedLanguageCorrespondRepository = newRepo => {
    this.setState({activeLanguageId: newRepo})
    this.getRepositories(newRepo)
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="github-popular-repo-container">
          <h1 className="main-heading">Popular</h1>
          {this.renderLanguageFilterItem()}
          {isLoading ? this.renderLoader() : this.renderRepositoriesList()}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
