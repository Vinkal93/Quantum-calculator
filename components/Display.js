import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';

const Display = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>{value}</Text>
    </View>
  );
};

export default Display;

