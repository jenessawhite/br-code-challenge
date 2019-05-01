import React from 'react';
import PianoKey from './PianoKey';
import KeyLog from './KeyLog';

const keyList = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keysPlayed: [],
      value: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = (keyClicked) => (
    this.setState({
      keysPlayed: [...this.state.keysPlayed, keyClicked]
    })
  )

  handleInputChange(event) {
    let value = event.target.value.match(/[A-Fa-g]/g);
    this.setState({
      value: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
  }

  render() {
    return (
      <React.Fragment>
        <div className="piano">
          { keyList.map(indKey => (
            <PianoKey key={indKey} keyName={indKey} onKeyClick={() => this.handleClick(indKey)}/>
          )) }
        </div>

        <KeyLog keysPlayed={this.state.keysPlayed} />

        <div>
          <h3>Compose your own</h3>
          <p>Type in the keys you{"'"}d like to play and press play</p>
          <p>NOTE: You can only type in characters that match those keys</p>

          <form onSubmit={this.handleSubmit}>
            Your keys: <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
            <input type="submit" value="Play!" />
          </form>
        </div>
      </React.Fragment>
    );
  }
};

export default Piano;