/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSpawnArray} from './spawnContext';

export const AddSpawn = props => {
  const [{}, dispatchSpawn] = useSpawnArray();
  const add = () => {
    dispatchSpawn({
      type: 'NEW_SPAWN',
      name: props.name,
    });
  };
  return (
    <Button
      onPress={() => add()}
      label={props.label ? props.label : 'Add'}
      prepend={props.prepend ? props.prepend : null}
      append={props.append ? props.append : null}
      textStyle={props.textStyle ? props.textStyle : null}
      style={props.style ? props.style : null}
      buttonColor={props.buttonColor ? props.buttonColor : null}
      pressedColor={props.pressedColor ? props.pressedColor : null}
      android_ripple={props.android_ripple ? props.android_ripple : null}
    />
  );
};

export const RemoveSpawn = props => {
  const [{}, dispatchSpawn] = useSpawnArray();
  const remove = () => {
    dispatchSpawn({
      type: 'REMOVE_SINGLE_SPAWN',
      payload: props.spawn,
    });
  };
  return (
    <Button
      onPress={() => remove(props.spawn)}
      label={props.label ? props.label : 'X'}
      prepend={props.prepend ? props.prepend : null}
      append={props.append ? props.append : null}
      textStyle={props.textStyle ? props.textStyle : null}
      style={props.style ? props.style : null}
      buttonColor={props.buttonColor ? props.buttonColor : null}
      pressedColor={props.pressedColor ? props.pressedColor : null}
      android_ripple={props.android_ripple ? props.android_ripple : null}
    />
  );
};

export const ClearSpawns = props => {
  const [{}, dispatchSpawn] = useSpawnArray();
  const removeKind = () => {
    dispatchSpawn({
      type: 'REMOVE_NAME',
      name: props.name,
    });
  };
  return (
    <Button
      onPress={() => removeKind()}
      label={props.label ? props.label : 'Clear by name'}
      prepend={props.prepend ? props.prepend : null}
      append={props.append ? props.append : null}
      textStyle={props.textStyle ? props.textStyle : null}
      style={props.style ? props.style : null}
      buttonColor={props.buttonColor ? props.buttonColor : null}
      pressedColor={props.pressedColor ? props.pressedColor : null}
      android_ripple={props.android_ripple ? props.android_ripple : null}
    />
  );
};

export const RemoveAll = props => {
  const [{}, dispatchSpawn] = useSpawnArray();
  const removeAll = () => {
    dispatchSpawn({
      type: 'KILL_ALL_SPAWN',
    });
  };
  return (
    <>
      <Button
        onPress={() => removeAll()}
        label={props.label ? props.label : 'Clear all Spawned'}
        prepend={props.prepend ? props.prepend : null}
        append={props.append ? props.append : null}
        textStyle={props.textStyle ? props.textStyle : null}
        style={props.style ? props.style : null}
        buttonColor={props.buttonColor ? props.buttonColor : null}
        pressedColor={props.pressedColor ? props.pressedColor : null}
        android_ripple={props.android_ripple ? props.android_ripple : null}
      />
    </>
  );
};

function Button({
  android_ripple,
  append,
  buttonColor,
  label,
  onPress,
  prepend,
  pressedColor,
  style,
  textStyle,
}) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={android_ripple}
      style={({pressed}) => [
        styles.button,
        {
          backgroundColor: pressed
            ? pressedColor
              ? pressedColor
              : 'rgb(210, 230, 255)'
            : buttonColor
            ? buttonColor
            : 'rgba(255, 255, 255, 0.2)',
        },
        style,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>{prepend ? prepend : null}</View>
        <Text style={[textStyle, {}]}>{label}</Text>
        <View>{append ? append : null}</View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});
