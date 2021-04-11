/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {RemoveSpawn} from 'rn-spawn-component';
import {DraggableBox} from './Draggable';

export const KnobWrap = props => {
  const spawnNum = props.spawnNumber;
  return (
    <View style={{alignItems: 'center'}}>
      <DraggableBox spawnNum />
      <Text style={{color: '#fff'}}>{spawnNum}</Text>
      <RemoveSpawn spawn={spawnNum} label={'Kill Me'} />
    </View>
  );
};
