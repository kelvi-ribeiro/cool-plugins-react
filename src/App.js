import React from 'react';
import PropTypes from 'prop-types';
 
export default class App extends React.Component {
  render() {
    return (<h1>Testando package prop-types</h1>)
  }
}
 
App.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: PropTypes.array.isRequired,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
}
