import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import Calculator from './components/Calculator';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.calculatorContainer}>
        <Calculator />
      </View>
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>Developed by Vinkal Prajapati</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
