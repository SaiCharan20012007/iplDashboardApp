// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatchesList: [],
    ids: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchFullDetails()
  }

  getMatchFullDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response2 = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data2 = await response2.json()
    const latestMatchDetails = data2.latest_match_details
    const upLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const upRecentMatchesList = data2.recent_matches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      teamBannerUrl: data2.team_banner_url,
      latestMatchDetails: upLatestMatchDetails,
      recentMatchesList: upRecentMatchesList,
      ids: id,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatchesList,
      ids,
      isLoading,
    } = this.state

    const styleContainer = `team-matches-${ids}`
    console.log(styleContainer)

    const mainContent = isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} />
      </div>
    ) : (
      <div>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-url"
        />
        <p className="latest-matches-title">Latest Matches</p>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <ul className="match-card-ul">
          {recentMatchesList.map(eachItem => (
            <MatchCard details={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
    return <div className={styleContainer}>{mainContent}</div>
  }
}

export default TeamMatches
