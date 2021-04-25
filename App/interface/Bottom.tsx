/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {SpawnMenu} from './SpawnMenu';
import {AddSpawn, RemoveAll} from '../rn-spawn-component';
import _style from '../style';
import {useSettings} from './storage/useSettings';

export function Bottom() {
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
          <SpawnMenu />
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
          <Text>
            <Icon
              name="baseball-bat"
              size={30}
              color={`rgba(${primeColor}, 0.75)`}
            />
          </Text>
          <RemoveAll
            label="Remove All"
            style={[
              _style.button,
              {
                borderColor: `rgba(${primeColor}, 0.75)`,
              },
            ]}
            textStyle={_style.textStyle}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottom: {
    alignItems: 'center',
    borderStyle: 'dotted',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 120,
    justifyContent: 'center',
  },
});
