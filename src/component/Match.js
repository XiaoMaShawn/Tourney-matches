import React from 'react';

const Match = (props) => {
  const match = props.match
  return (
    <article className="Match">
      <h1>{match.players[0]} <span>vs</span> {match.players[1]}</h1>
      {/* To be shown when there is a winner */}
      {match.winner && <h2>{match.winner} is the winner by {match.scoreDifference}!</h2>}
      {/* To be shown when there is no winner */}
      {!match.winner && <h2>No winners yet!</h2>}
    </article>
  );
};

export default Match;