/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {DraggableBox} from './Draggable';

export const KnobWrap = props => {
  const spawnNum = props.spawnNumber;
  return (
    <View style={{width: 50}}>
      <DraggableBox spawnNum={spawnNum} />
    </View>
  );
};
