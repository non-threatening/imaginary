import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSettings} from '../storage';

interface toggleProps {
  onPress: any;
  style: object;
  toggled: boolean;
  icon: string;
  size: number;
  text: string;
}

export function Toggle({
  onPress,
  style,
  toggled,
  icon,
  size,
  text,
}: toggleProps) {
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
      onPress={onPress}
      style={[
        styles.button,
        style,
        {
          backgroundColor: toggled
            ? 'rgba(0, 0, 0, 0.15)'
            : 'rgba(0, 0, 0, 0.5)',
          borderColor: toggled
            ? `rgba(${primeColor}, 0.75)`
            : `rgba(${primeColor}, 0.5)`,
        },
      ]}
    >
      <Text>
        <Icon
          name={icon ? icon : null}
          size={size ? size : 20}
          color={`rgba(${primeColor}, 0.75)`}
        />
      </Text>
      <Text style={styles.textStyle}>{text}</Text>
      <View
        style={[
          styles.led,
          {
            backgroundColor: toggled ? `rgba(${primeColor}, 0.75)` : '#000',
            borderColor: `rgba(${primeColor}, 0.75)`,
          },
        ]}
      />
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
    margin: 5,
    padding: 8,
  },
  led: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 2,
    height: 11,
    marginLeft: 8,
    marginTop: 1,
    width: 12,
  },
  textStyle: {
    color: 'rgba(255, 255, 255, 0.75)',
  },
});
