/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button} from './Button';
import {SpawnMenu} from './SpawnMenu';
import {AddSpawn} from '../rn-spawn-component';
import _style from '../style';
import {useSettings} from './storage/useSettings';
import {masterDisposeAllOsc} from '../tone';
import {useSpawnArray} from '../rn-spawn-component';

export function Bottom() {
  const [{}, dispatchSpawn] = useSpawnArray();
  const [{prime}] = useSettings();
  const primeColor = [prime.red, prime.green, prime.blue];

  return (
    <>
      <View style={{backgroundColor: '#000'}}>
        <View
          style={[
            styles.bottom,
            {
              backgroundColor: `rgba(${primeColor}, 0.2)`,
              borderColor: `rgba(${primeColor}, 0.75)`,
            },
          ]}
        >
          <AddSpawn
            android_ripple={{
              color: `rgba(${primeColor}, 0.2)`,
            }}
            label="Spawn Component"
            name="sine"
            style={[
              _style.button,
              {
                borderColor: `rgba(${primeColor}, 0.75)`,
              },
            ]}
            textStyle={_style.textStyle}
          />

          <Button onPress={() => removeAll()} text=" Refresh" icon="broom" />

          <SpawnMenu />
        </View>
      </View>
    </>
  );

  function removeAll() {
    masterDisposeAllOsc();
    dispatchSpawn({type: 'KILL_ALL_SPAWN'});
  }
}

const styles = StyleSheet.create({
  bottom: {
    alignItems: 'center',
    borderStyle: 'dotted',
    borderRadius: 1,
    borderWidth: 1,
    flexDirection: 'row',
    height: 120,
    justifyContent: 'center',
  },
});
