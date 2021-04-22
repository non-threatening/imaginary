/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {fromHsv, TriangleColorPicker} from 'react-native-color-picker';
import hexRgb from 'hex-rgb';

import {storeData} from './interface/storage/storeData';
import {useSettings} from './interface/storage/useSettings';

const h = Dimensions.get('window').height;
const statusHeight = StatusBar.currentHeight;
export const height = h - statusHeight;
export const width = Dimensions.get('window').width;

export function Picker() {
  const [{prime}, dispatch] = useSettings();
  return (
    <TriangleColorPicker
      onColorChange={color => {
        storeData('@rgb', hexRgb(fromHsv(color)));
        dispatch({
          type: 'RGB',
          prime: hexRgb(fromHsv(color)),
        });
      }}
      defaultColor={`rgba(${prime.red}, ${prime.green}, ${prime.blue}, 1)`}
      hideControls
      style={{flex: 1}}
    />
  );
}

const baseRed = 0;
const baseGreen = 255;
const baseBlue = 255;

export const color = {
  primary: `rgba(${baseRed}, ${baseGreen}, ${baseBlue}, 0.2)`,
  secondary: 'rgba(69, 0, 0, 0.5)',
  outline: `rgba(${baseRed}, ${baseGreen}, ${baseBlue}, 0.75)`,

  darkBlue: '#05004c',
  pink: '#d8bfd8',
  ripple: `rgba(${baseRed}, ${baseGreen}, ${baseBlue}, 0.2)`,
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
