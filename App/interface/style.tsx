/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {fromHsv, TriangleColorPicker} from 'react-native-color-picker';
import hexRgb from 'hex-rgb';

import {storeData} from './storage/storeData';
import {useSettings} from './storage/useSettings';

const h = Dimensions.get('window').height;
const statusHeight = StatusBar.currentHeight;
export const stageHeight = h - statusHeight - 120;
export const DeviceWidth = Dimensions.get('window').width;

export function Picker() {
  const [{prime}, dispatch] = useSettings();
  const primeColor = [prime.red, prime.green, prime.blue];
  return (
    <TriangleColorPicker
      onColorChange={color => {
        storeData('@rgb', hexRgb(fromHsv(color)));
        dispatch({
          type: 'RGB',
          prime: hexRgb(fromHsv(color)),
        });
      }}
      defaultColor={`rgba(${primeColor}, 1)`}
      hideControls
      style={{flex: 1}}
    />
  );
}

export const color = {
  secondary: 'rgba(0, 0, 0, 0.5)',
  darkBlue: '#05004c',
  pink: '#d8bfd8',
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
