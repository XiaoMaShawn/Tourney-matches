import React from 'react';
import Player from './Player';



const PlayList = (props) => {
  const playerData = props.parsedPlayerData;
  const parsedPlayer = playerData.map((player) => {
    return <Player key={player.gamerTag} player={player} />
  })
  return (
    <section className='PlayerList'>
      <h1>Current participating players</h1>
      {parsedPlayer}
    </section>
  );
};

export default PlayList;