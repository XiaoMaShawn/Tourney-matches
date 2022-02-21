import './App.css';
import PlayList from './component/PlayerList';
import MatchList from './component/MatchList';
import playerData from './data/playerData';
import matchData from './data/matchData';
import { preparePlayerData, addWinsToPlayers } from './helper/playerHelpers';


function App() {

  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches
        <span>Where Coding and Tournaments found their Match!</span>
      </h1>
      <PlayList parsedPlayerData={parsedPlayerData} />
      <MatchList matchData={matchData} />


    </div>
  );
}

export default App;


