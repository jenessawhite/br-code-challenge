import React from 'react';

class PianoKey extends React.Component {
  render() {
    const { keyName, onKeyClick } = this.props
    return (
      <button onClick={onKeyClick} className="piano-key">
        <span>
          {keyName}
        </span>
      </button>
    );
  }
};

export default PianoKey;