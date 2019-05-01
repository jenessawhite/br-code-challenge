import React from 'react';

class PianoKey extends React.Component {
  handleClick = (name) => {
    console.log(name, ' was clicked.');
  }

  render() {
    const { keyName } = this.props
    return (
      <button onClick={() => this.handleClick(keyName)} className="piano-key">
        <span>
          {keyName}
        </span>
      </button>
    );
  }
};

export default PianoKey;