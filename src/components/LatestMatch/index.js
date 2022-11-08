// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="latest-match-sec-1">
        <p className="latest-match-title">{competingTeam}</p>
        <p className="date">{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="latest-match-sec-2">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="lm-logo"
        />
      </div>
      <div className="latest-match-sec-3">
        <p className="date">First Innings</p>
        <p>{firstInnings}</p>
        <p className="date">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="date">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="date">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
