import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  calculator: {
    padding: 20,
  },
  display: {
    padding: 20,
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: 64,
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  wideButton: {
    width: 170,
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  operatorButton: {
    backgroundColor: '#f1a33c',
  },
  functionButton: {
    backgroundColor: '#a6a6a6',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
  operatorButtonText: {
    color: '#fff',
  },
  functionButtonText: {
    color: '#000',
  },
  copyrightContainer: {
    padding: 10,
    alignItems: 'center',
  },
  copyrightText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default styles;

