/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {fromHsv, TriangleColorPicker} from 'react-native-color-picker';
import hexRgb from 'hex-rgb';

import {storeData} from '../storage/storeData';
import {useSettings} from '../storage/useSettings';

export function Picker() {
  const [{prime}, dispatch] = useSettings();
  const primeColor = [
    prime ? prime.red : 0,
    prime ? prime.green : 255,
    prime ? prime.blue : 255,
  ];
  return (
    <View style={styles.box}>
      <View
        style={[
          styles.outline,
          {
            borderColor: `rgba(${primeColor}, 0.75)`,
          },
        ]}
      >
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
          style={{flex: 1, height: 200, width: 200}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  outline: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderStyle: 'dotted',
    borderRadius: 4,
    borderWidth: 1,
    height: 225,
    marginTop: 15,
    width: 250,
  },
});
