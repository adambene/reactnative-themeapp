import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import ThemeProvider from './ThemeProvider';

const Button = (
  {
    children,
    style,
    textStyle,
    onPress,
  },
  {
    theme: {
      primaryColor,
      primaryPressedColor,
      borderRadius,
      padding,
      margin,
      color,
      fontSize,
    }
  }
) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor={primaryPressedColor}
    style={{
      backgroundColor: primaryColor,
      borderRadius,
      padding,
      margin,
      ...style,
    }}
  >
    {
      typeof children === 'string'
        ? <Text style={{
          color,
          fontSize,
          ...textStyle,
        }}>{children}</Text>
        : children
    }
  </TouchableHighlight>
);

export default Button;

Button.contextTypes = ThemeProvider.childContextTypes;
