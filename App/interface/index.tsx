import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import {SpawnMenu} from './SpawnMenu';
import {KnobWrap} from '../draggable';
import {SpawnProvider, SpawnController} from 'rn-spawn-component';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function Interface() {
  return (
    <>
      <SpawnProvider>
        <View style={styles.body}>
          <SpawnController startCount={1} spawn={<KnobWrap />} name="Knob" />
        </View>

        <View style={styles.bottom}>
          <SpawnMenu />
        </View>
      </SpawnProvider>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    height: height - 100,
    width: width,
  },
  bottom: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05004c',
    height: 100,
  },
});
