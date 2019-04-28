import React from 'react';
import PropTypes from 'prop-types';

const PianoKey = props => {
  return (
    <button>{props.keyName}</button>
  );
};

PianoKey.propTypes = {
  
};

export default PianoKey;