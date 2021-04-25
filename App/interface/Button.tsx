import React from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import _style from '../style';
import {useSettings} from './storage/useSettings';

export function Button(props) {
  const [{prime}] = useSettings();
  const primeColor = [prime.red, prime.green, prime.blue];
  return (
    <Pressable
      onPress={props.onPress}
      android_ripple={{
        color: `rgba(${primeColor}, 0.2)`,
      }}
      style={[
        _style.button,
        {
          borderColor: `rgba(${primeColor}, 0.75)`,
        },
      ]}
    >
      <Text>
        <Icon name={props.icon} size={26} color={`rgba(${primeColor}, 0.75)`} />
      </Text>
      <Text style={_style.textStyle}>{props.text}</Text>
    </Pressable>
  );
}
