import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SpawnMenu} from './SpawnMenu';
import {KnobWrap} from '../draggable';
import {AddSpawn, SpawnProvider, SpawnController} from 'rn-spawn-component';
import _style, {color, height, width} from '../style';

export function Interface() {
  return (
    <>
      <SpawnProvider>
        <View style={styles.body}>
          <SpawnController startCount={1} spawn={<KnobWrap />} name="Knob" />
        </View>

        <View style={styles.bottom}>
          <SpawnMenu />
          <AddSpawn
            android_ripple={{
              color: color.darkBlue,
            }}
            label="Spawn Component"
            name="Knob"
            style={[_style.button]}
            textStyle={_style.textStyle}
          />
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
    backgroundColor: color.darkBlue,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
  },
});
