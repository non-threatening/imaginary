/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Svg, {Line} from 'react-native-svg';

import {useSettings} from './storage/useSettings';
import {DeviceHeight, DeviceWidth} from './style';

export function BackgroundGrid() {
  const [{prime}] = useSettings();
  const primeColor = [prime.red, prime.green, prime.blue];

  let items = ['100', '200', '266', '300', '400', '500', '600', '666'];

  let lineList = items.map((item, index) => {
    return (
      <Line
        key={index}
        stroke={`rgb(${primeColor})`}
        strokeWidth="1"
        strokeOpacity="0.3"
        y1={item}
        y2={item}
        x1="10"
        x2={DeviceWidth - 10}
      />
    );
  });

  let textList = items.map((item, index) => {
    return (
      <Text
        key={index}
        style={{
          color: `rgba(${primeColor}, 0.5)`,
          position: 'absolute',
          left: 15,
          top: JSON.parse(item),
        }}
      >
        {item} hz
      </Text>
    );
  });

  return (
    <View>
      {textList}
      <Svg height={DeviceHeight} width={DeviceWidth}>
        {lineList}
      </Svg>
    </View>
  );
}
