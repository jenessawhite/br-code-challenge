import React from 'react';

const KeyLog = props => {
  return (
    <div>
      <h3>Keys played:</h3>
      {!props.keysPlayed.length ? "You haven't played any keys yet": props.keysPlayed.toString().toUpperCase()}
    </div>
  );
};

export default KeyLog;