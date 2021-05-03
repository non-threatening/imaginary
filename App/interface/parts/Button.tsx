import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSettings} from '../storage/useSettings';

export function Button(props) {
  const [{prime}] = useSettings();
  const primeColor = [
    prime ? prime.red : 0,
    prime ? prime.green : 255,
    prime ? prime.blue : 255,
  ];
  return (
    <Pressable
      android_ripple={{
        color: `rgba(${primeColor}, 0.2)`,
      }}
      onPress={props.onPress}
      style={[
        styles.button,
        props.style,
        {
          borderColor: `rgba(${primeColor}, 0.75)`,
        },
      ]}
    >
      <Text>
        <Icon
          name={props.icon ? props.icon : null}
          size={props.size ? props.size : 20}
          color={`rgba(${primeColor}, 0.75)`}
        />
      </Text>
      <Text style={styles.textStyle}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 4,
    display: 'flex',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    padding: 8,
  },
  textStyle: {
    color: 'rgba(255, 255, 255, 0.75)',
  },
});
