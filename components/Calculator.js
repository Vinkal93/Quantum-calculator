import React, { useState } from 'react';
import { View } from 'react-native';
import Display from './Display';
import Button from './Button';
import styles from '../styles';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberPress = (num) => {
    if (display === '0') {
      setDisplay(num.toString());
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperatorPress = (op) => {
    if (operator !== null) {
      handleEqualsPress();
    }
    setOperator(op);
    setFirstValue(display);
    setDisplay('0');
  };

  const handleEqualsPress = () => {
    const second = parseFloat(display);
    let result = 0;
    switch (operator) {
      case '+':
        result = parseFloat(firstValue) + second;
        break;
      case '-':
        result = parseFloat(firstValue) - second;
        break;
      case '*':
        result = parseFloat(firstValue) * second;
        break;
      case '/':
        result = parseFloat(firstValue) / second;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setOperator(null);
    setFirstValue('');
  };

  const handleClearPress = () => {
    setDisplay('0');
    setOperator(null);
    setFirstValue('');
  };

  const handlePercentPress = () => {
    const value = parseFloat(display) / 100;
    setDisplay(value.toString());
  };

  return (
    <View style={styles.calculator}>
      <Display value={display} />
      <View style={styles.buttonRow}>
        <Button title="C" onPress={handleClearPress} type="function" />
        <Button title="+/-" onPress={() => setDisplay((parseFloat(display) * -1).toString())} type="function" />
        <Button title="%" onPress={handlePercentPress} type="function" />
        <Button title="÷" onPress={() => handleOperatorPress('/')} type="operator" />
      </View>
      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handleNumberPress(7)} />
        <Button title="8" onPress={() => handleNumberPress(8)} />
        <Button title="9" onPress={() => handleNumberPress(9)} />
        <Button title="×" onPress={() => handleOperatorPress('*')} type="operator" />
      </View>
      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handleNumberPress(4)} />
        <Button title="5" onPress={() => handleNumberPress(5)} />
        <Button title="6" onPress={() => handleNumberPress(6)} />
        <Button title="-" onPress={() => handleOperatorPress('-')} type="operator" />
      </View>
      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handleNumberPress(1)} />
        <Button title="2" onPress={() => handleNumberPress(2)} />
        <Button title="3" onPress={() => handleNumberPress(3)} />
        <Button title="+" onPress={() => handleOperatorPress('+')} type="operator" />
      </View>
      <View style={styles.buttonRow}>
        <Button title="0" onPress={() => handleNumberPress(0)} wide />
        <Button title="." onPress={() => handleNumberPress('.')} />
        <Button title="=" onPress={handleEqualsPress} type="operator" />
      </View>
    </View>
  );
};

export default Calculator;

