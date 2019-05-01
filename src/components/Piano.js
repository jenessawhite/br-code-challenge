import React from 'react';
import PianoKey from './PianoKey';
import KeyLog from './KeyLog';

const keyList = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keysPlayed: []
    };
  }

  handleClick = (keyClicked) => (
    this.setState({
      keysPlayed: [...this.state.keysPlayed, keyClicked]
    })
  )

  render() {
    return (
      <React.Fragment>
        <div className="piano">
          { keyList.map(indKey => (
            <PianoKey key={indKey} keyName={indKey} onKeyClick={() => this.handleClick(indKey)}/>
          )) }
        </div>
        <KeyLog keysPlayed={this.state.keysPlayed}/>
      </React.Fragment>
    );
  }
};

export default Piano;