import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {SpawnMenu} from './SpawnMenu';
import {KnobWrap} from '../draggable';
import {AddSpawn, SpawnProvider, SpawnController} from '../rn-spawn-component';
import _style, {color, height, width} from '../style';

export function Interface() {
  return (
    <>
      <SpawnProvider>
        <View style={styles.body}>
          <SpawnController spawn={<KnobWrap />} name="sine" />
        </View>

        <View style={styles.bottom}>
          <SpawnMenu />
          <AddSpawn
            android_ripple={{
              color: color.ripple,
            }}
            label="Spawn Component"
            name="sine"
            style={[_style.button]}
            textStyle={_style.textStyle}
          />
          <Text>
            <Icon name="baseball-bat" size={30} color="#900" />
          </Text>
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
    backgroundColor: 'rgb(36, 118, 36)',
    borderColor: 'rgb(0, 255, 0)',
    borderStyle: 'dotted',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 120,
    justifyContent: 'center',
  },
});
