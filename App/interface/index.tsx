/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {SpawnMenu} from './SpawnMenu';
import {KnobWrap} from '../draggable';
import {AddSpawn, SpawnProvider, SpawnController} from '../rn-spawn-component';
import _style, {color, height, width} from '../style';
import {useSettings} from './storage/useSettings';

export function Interface() {
  const [{prime}] = useSettings();
  return (
    <>
      <SpawnProvider>
        <View style={styles.body}>
          <SpawnController spawn={<KnobWrap />} name="sine" />
        </View>

        <View style={{backgroundColor: '#000'}}>
          <View
            style={[
              styles.bottom,
              {
                backgroundColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.2)`,
                borderColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`,
              },
            ]}
          >
            <SpawnMenu />
            <AddSpawn
              android_ripple={{
                color: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.2)`,
              }}
              label="Spawn Component"
              name="sine"
              style={[
                _style.button,
                {
                  borderColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`,
                },
              ]}
              textStyle={_style.textStyle}
            />
            <Text>
              <Icon
                name="baseball-bat"
                size={30}
                color={`rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`}
              />
            </Text>
          </View>
        </View>
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
  bottom: {
    alignItems: 'center',
    backgroundColor: color.primary,
    borderColor: color.outline,
    borderStyle: 'dotted',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 120,
    justifyContent: 'center',
  },
});
