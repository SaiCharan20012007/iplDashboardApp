// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const datau = data.teams

    // const updatedData = data.map(eachItem => ({
    //   id: eachItem.id,
    //   name: eachItem.name,
    //   teamImageUrl: eachItem.team_image_url,
    // }))
    const formattedData = datau.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    console.log(formattedData)
    this.setState({teamCardsList: formattedData, isLoading: false})
  }

  render() {
    const {teamCardsList, isLoading} = this.state
    const content = isLoading ? (
      <div testid="loader">
        <Loader
          type="Oval"
          color="#ffffff"
          className="load"
          height={50}
          width={50}
        />
      </div>
    ) : (
      <ul className="team-cards-unorderd-list">
        {teamCardsList.map(each => (
          <TeamCard details={each} key={each.id} />
        ))}
      </ul>
    )

    return (
      <div className="home-bg-container">
        <div className="ipl-dashboard-home-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-title">IPL Dashboard</h1>
        </div>
        {content}
      </div>
    )
  }
}

export default Home
