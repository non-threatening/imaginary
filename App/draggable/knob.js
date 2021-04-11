/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

const Knob = props => {
  console.log(`preens: ${props.spawnNum} x: ${props.x} y: ${props.y}`);
  return (
    <Pressable
      style={styles.box}
      onPress={() => {
        console.warn('thing');
      }}
      onLongPress={() => {
        console.warn('long thing');
      }}>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
        style={{width: 20, height: 20}}
      />
      <Text>{props.spawnNum.toString()}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
});

export default Knob;
