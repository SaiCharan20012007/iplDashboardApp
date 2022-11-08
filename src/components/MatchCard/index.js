// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = details

  const matchStatusStyle =
    matchStatus === 'Lost' ? 'match-lost-style' : 'match-won-style'

  return (
    <li className="match-card-list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-card-title">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={matchStatusStyle}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
