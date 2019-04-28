import React from 'react';
import PianoKey from './PianoKey';

const keyList = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

const Piano = props => {
  return (
    <div className="piano">
      <h2>Piano Wrapper</h2>

      <div>
        {
          keyList.map(indKey => (
            <PianoKey keyName={indKey} />
          ))
        }
      </div>
    </div>
  );
};

// Piano.propTypes = {
//   keys: PropTypes.array
// };

export default Piano;