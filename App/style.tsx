import {Dimensions, StyleSheet} from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const color = {
  pink: '#d8bfd8',
  darkBlue: '#05004c',
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
