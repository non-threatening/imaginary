import React from 'react';
import {StyleSheet, View} from 'react-native';

import {KnobWrap} from '../draggable';
import {SpawnProvider, SpawnController} from '../rn-spawn-component';
import {height, width} from './style';
import {Bottom} from './components/Bottom';

export function Interface() {
  return (
    <>
      <SpawnProvider>
        <View style={styles.body}>
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
    height: height - 120,
    width: width,
  },
});
