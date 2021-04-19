/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

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
          <Menu>
            <MenuTrigger text="Select action" />
            <MenuOptions>
              <MenuOption onSelect={() => alert(`Save`)} text="Save" />
              <MenuOption onSelect={() => alert(`Delete`)}>
                <Text style={{color: 'red'}}>Delete</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert(`Not called`)}
                disabled={true}
                text="Disabled"
              />
            </MenuOptions>
          </Menu>
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
