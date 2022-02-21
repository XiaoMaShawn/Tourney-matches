import React from 'react';

const Player = (props) => {
  const player = props.player;
  return (
    <article className="Player">
      <h1>
        {player.firstName} <span>Secret</span> {player.lastName}
      </h1>
      {/* To be shown when there are no wins */}
      {player.win === 0 && <h2 className="zero">Currently with no wins</h2>}
      {/* To be shown when there is 1 win */}
      {player.win === 1 && <h2>Currently at 1 win</h2>}
      {/* To be shown when there is more than one win */}
      {player.win > 1 && <h2>Currently at 1+ wins</h2>}
    </article>
  );
};

export default Player;