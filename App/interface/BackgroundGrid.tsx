/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Svg, {Line} from 'react-native-svg';

import {useSettings} from './storage/useSettings';
import {stageHeight, DeviceWidth} from './style';

let json = require('../assets/notes.json');
let items = json.notes;

export function BackgroundGrid() {
  const [{prime, range}] = useSettings();
  const primeColor = [prime.red, prime.green, prime.blue];

  function offSet(freq) {
    return ((freq - range[1]) * stageHeight) / (range[0] - range[1]);
  }

  let lineList = items.map((item, index) => {
    return item.frequency > range[0] && item.frequency < range[1] ? (
      <Line
        key={index}
        stroke={`rgb(${primeColor})`}
        strokeWidth="1"
        strokeOpacity="0.3"
        x1="10"
        x2={DeviceWidth - 10}
        y1={offSet(item.frequency)}
        y2={offSet(item.frequency)}
      />
    ) : null;
  });

  let textList = items.map((item, index) => {
    return item.frequency > range[0] &&
      item.frequency < range[1] &&
      !(index % 4) ? (
      <Text
        key={index}
        style={{
          color: `rgba(${primeColor}, 0.5)`,
          left: 15,
          position: 'absolute',
          top: offSet(item.frequency),
        }}
      >
        {item.note} - {item.frequency} hz
      </Text>
    ) : null;
  });

  return (
    <View>
      {textList}
      <Svg height={stageHeight} width={DeviceWidth}>
        {lineList}
      </Svg>
    </View>
  );
}
