import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const h = Dimensions.get('window').height;
export const statusHeight = StatusBar.currentHeight;
export const stageHeight = h - /* statusHeight - */ 120;
export const DeviceWidth = Dimensions.get('window').width;

export const color = {
  secondary: 'rgba(0, 0, 0, 0.5)',
};

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: color.secondary,
    borderColor: color.ripple,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 3,
    display: 'flex',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textStyle: {
    color: 'rgba(255, 255, 255, 0.75)',
  },
});
