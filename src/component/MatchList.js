import React from 'react';
import Match from './Match';


const MatchList = (props) => {
  const matchData = props.matchData;
  const parsedMatch = matchData.map(match => {
    return <Match match={match} key={match.matchNumber} />
  });
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedMatch}
    </section>
  );
};

export default MatchList;