import React from 'react';

const KeyLog = props => {
  return (
    <div>
      <h3>Keys played:</h3>
      {props.keysPlayed.toString()}
    </div>
  );
};

export default KeyLog;