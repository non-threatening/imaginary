import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const h = Dimensions.get('window').height;
const statusHeight = StatusBar.currentHeight;
export const height = h - statusHeight;
export const width = Dimensions.get('window').width;

export const color = {
  darkBlue: '#05004c',
  pink: '#d8bfd8',
  ripple: 'rgba(0, 255, 0, 0.5)',
};

export default StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    borderColor: color.ripple,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 3,
    elevation: 2,
    padding: 10,
  },
  textStyle: {
    color: color.pink,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});
