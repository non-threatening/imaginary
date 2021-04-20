import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const h = Dimensions.get('window').height;
const statusHeight = StatusBar.currentHeight;
export const height = h - statusHeight;
export const width = Dimensions.get('window').width;

export const color = {
  primary: 'rgba(0, 255, 0, 0.2)',
  secondary: 'rgba(0, 0, 0, 0.5)',
  outline: 'rgba(0, 255, 0, 0.75)',

  darkBlue: '#05004c',
  pink: '#d8bfd8',
  ripple: 'rgba(0, 255, 0, 0.2)',
};

export default StyleSheet.create({
  button: {
    backgroundColor: color.secondary,
    borderColor: color.ripple,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 3,
    elevation: 2,
    padding: 10,
  },
  textStyle: {
    color: 'rgba(255, 255, 255, 0.75)',
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});
