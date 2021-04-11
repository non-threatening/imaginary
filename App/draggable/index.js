import React from 'react';
import {View} from 'react-native';
import {DraggableBox} from './Draggable';

export const KnobWrap = props => {
  const spawnNum = props.spawnNumber;
  return (
    <View>
      <DraggableBox spawnNum={spawnNum} />
    </View>
  );
};
