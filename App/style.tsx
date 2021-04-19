import {Dimensions, StyleSheet} from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const color = {
  darkBlue: '#05004c',
  pink: '#d8bfd8',
  ripple: 'rgba(0, 255, 0, 0.5)',
};

export default StyleSheet.create({
  button: {
    backgroundColor: color.pink,
    borderColor: '#daa1da',
    borderWidth: 1,
    borderRadius: 5,
    elevation: 2,
    padding: 10,
  },
  textStyle: {
    color: color.darkBlue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
