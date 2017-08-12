import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class ThemeProvider extends Component {
  getChildContext() {
    return {
      theme: this.props.theme,
    };
  }
  render() {
    return Children.only(this.props.children);
  }
}

ThemeProvider.childContextTypes = {
  theme: PropTypes.shape({
    primaryColor: PropTypes.string,
    primaryPressedColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    borderRadius: PropTypes.number,
    padding: PropTypes.number,
    margin: PropTypes.number,
  }),
};
