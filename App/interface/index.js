import React from 'react';
import {StyleSheet, View} from 'react-native';

import {KnobWrap} from '../draggable';
import {SpawnProvider, SpawnController} from '../rn-spawn-component';
import {stageHeight, DeviceWidth} from './style';
import {Bottom} from './components/Bottom';
import {BackgroundGrid} from './components/BackgroundGrid';
import {useSettings} from './storage/useSettings';

export function Interface() {
  const [{prime}] = useSettings();
  const primeColor = [
    prime ? prime.red : 0,
    prime ? prime.green : 255,
    prime ? prime.blue : 255,
  ];
  return (
    <>
      <SpawnProvider>
        <View style={styles.body}>
          <View style={{backgroundColor: `rgba(${primeColor}, .05)`}}>
            <BackgroundGrid />
            <SpawnController spawn={<KnobWrap />} name="sine" />
          </View>
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
