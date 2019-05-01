import React from 'react';
import PianoKey from './PianoKey';

const keyList = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

const Piano = () => {
  return (
    <div className="piano">
      { keyList.map(indKey => (
          <PianoKey key={indKey} keyName={indKey} />
      )) }
    </div>
  );
};

export default Piano;