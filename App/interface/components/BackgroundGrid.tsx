/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Svg, {Line} from 'react-native-svg';

import {useSettings} from '../storage/useSettings';
import {stageHeight, DeviceWidth} from '../style';

const json = require('../../assets/notes.json');
const items = json.notes;

export function BackgroundGrid() {
  const [{prime, range}] = useSettings();
  const primeColor = [
    prime ? prime.red : 0,
    prime ? prime.green : 255,
    prime ? prime.blue : 255,
  ];
  const minRange = range ? range[0] : 196;
  const maxRange = range ? range[1] : 1760;

  function offSet(freq) {
    return ((freq - maxRange) * stageHeight) / (minRange - maxRange);
  }

  let lineList = items.map((item, index) => {
    return item.frequency > minRange && item.frequency < maxRange ? (
      <Line
        key={index}
        stroke={`rgb(${primeColor})`}
        strokeWidth={1}
        strokeOpacity={!(index % 4) ? 0.4 : 0.25}
        x1={10}
        x2={DeviceWidth - 10}
        y1={offSet(item.frequency)}
        y2={offSet(item.frequency)}
      />
    ) : null;
  });

  let textList = items.map((item, index) => {
    return item.frequency > minRange &&
      item.frequency < maxRange &&
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
      <Svg height={stageHeight + 120} width={DeviceWidth}>
        {lineList}
      </Svg>
    </View>
  );
}
