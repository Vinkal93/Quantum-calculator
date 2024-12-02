import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const Button = ({ onPress, title, type, wide }) => {
  const buttonStyle = [
    styles.button,
    type === 'operator' && styles.operatorButton,
    type === 'function' && styles.functionButton,
    wide && styles.wideButton,
  ];

  const textStyle = [
    styles.buttonText,
    type === 'operator' && styles.operatorButtonText,
    type === 'function' && styles.functionButtonText,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

