/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export function Popup() {
  return (
    <View style={styles.body}>
      <Menu name="knobUp">
        <MenuTrigger text="Select action" />
        <MenuOptions>
          <MenuOption onSelect={() => alert('Save')} text="Save" />
          <MenuOption onSelect={() => alert('Delete')}>
            <Text style={styles.text}>Delete</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => alert('Not called')}
            disabled={true}
            text="Disabled"
          />
        </MenuOptions>
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  text: {
    backgroundColor: '#666',
  },
});
