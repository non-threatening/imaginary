import React from 'react';
import {StyleSheet, View} from 'react-native';

import {KnobWrap} from '../draggable';
import {SpawnProvider, SpawnController} from '../rn-spawn-component';
import {stageHeight, DeviceWidth} from './style';
import {Bottom} from './components/Bottom';
import {BackgroundGrid} from './components/BackgroundGrid';

export function Interface() {
  return (
    <>
      <SpawnProvider>
        <View style={styles.body}>
          <BackgroundGrid />
          <SpawnController spawn={<KnobWrap />} name="sine" />
        </View>

        <Bottom />
      </SpawnProvider>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    height: stageHeight,
    width: DeviceWidth,
  },
});
