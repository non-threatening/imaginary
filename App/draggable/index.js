import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DraggableBox} from './Draggable';
import {stageHeight, DeviceWidth} from '../interface/style';

export const KnobWrap = props => {
  const name = props.name;
  const spawnNum = props.spawnNumber;

  return (
    <View style={styles.box}>
      <DraggableBox spawnNum={spawnNum} name={name} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    left: DeviceWidth * 0.5 - 30,
    position: 'absolute',
    top: stageHeight * 0.5 - 70,
  },
});
