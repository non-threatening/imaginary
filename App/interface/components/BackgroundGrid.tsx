import React from 'react';
import {Text, View} from 'react-native';
import Svg, {Line, Text as TextSvg} from 'react-native-svg';

import {useSettings} from '../storage';
import {stageHeight, statusHeight, DeviceWidth} from '../style';

const json = require('../../assets/notes440.json');
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
  const randRange = range ? Math.trunc(range[0] + range[1]) : 0;

  function offSet(freq) {
    return ((freq - maxRange) * stageHeight) / (minRange - maxRange);
  }

  let lineList = items.map((item, index) => {
    return item.frequency > minRange && item.frequency < maxRange ? (
      <Line
        key={index}
        stroke={`rgb(${primeColor})`}
        strokeWidth={1}
        strokeOpacity={
          !((index + randRange) % Math.round((items.length - index) / 10))
            ? 0.3
            : 0.15
        }
        x1={5}
        x2={DeviceWidth - 5}
        y1={offSet(item.frequency)}
        y2={offSet(item.frequency)}
      />
    ) : null;
  });

  let textList = items.map((item, index) => {
    return item.frequency > minRange &&
      item.frequency < maxRange &&
      !((index + randRange) % Math.round((items.length - index) / 10)) ? (
      <Text
        key={index}
        style={{
          color: `rgba(${primeColor}, 0.4)`,
          left: 10,
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
        <VolumeLine
          stroke={`rgb(${primeColor})`}
          strokeOpacity={0.21}
          x={0.5}
        />
        <VolumeLine stroke={`rgb(${primeColor})`} x={0.75} />
        <VolumeLine
          stroke={`rgb(${primeColor})`}
          strokeOpacity={0.21}
          x={0.875}
        />
        <VolumeLine stroke={`rgb(${primeColor})`} x={0.9375} />
        <TextSvg
          fill={`rgba(${primeColor}, 0.4)`}
          stroke={'none'}
          fontSize={14}
          x={DeviceWidth * 0.5 - 5}
          y={12 + statusHeight}
          textAnchor={'end'}
        >
          - 20 db
        </TextSvg>
        <TextSvg
          fill={`rgba(${primeColor}, 0.4)`}
          stroke={'none'}
          fontSize={14}
          x={DeviceWidth * 0.875 - 5}
          y={12 + statusHeight}
          textAnchor={'end'}
        >
          - 0 db
        </TextSvg>
      </Svg>
    </View>
  );
}

function VolumeLine(props) {
  return (
    <Line
      strokeWidth={1}
      strokeOpacity={0.12}
      x1={DeviceWidth * props.x}
      x2={DeviceWidth * props.x}
      y1={5}
      y2={stageHeight - 5}
      {...props}
    />
  );
}
