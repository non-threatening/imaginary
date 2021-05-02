/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
const {Popover} = renderers;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {images} from './img';
import {useSpawnArray} from '../rn-spawn-component';
import {soloDispose, soloPause, soloPitchVolume} from '../tone';
import _style, {color, stageHeight, DeviceWidth} from '../interface/style';
import {useSettings} from '../interface/storage/useSettings';

const Knob = props => {
  const [{}, dispatchSpawn] = useSpawnArray();
  const {spawnNum, xPos, yPos} = props;
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);
  const [{prime, range}] = useSettings();
  const primeColor = [
    prime ? prime.red : 0,
    prime ? prime.green : 255,
    prime ? prime.blue : 255,
  ];
  const minRange = range ? range[0] : 196;
  const maxRange = range ? range[1] : 1760;

  let normalize =
    (1 + ((yPos + stageHeight * 0.5) / stageHeight) * -1) * stageHeight;
  let yFreq = minRange + (normalize * (maxRange - minRange)) / stageHeight;

  let xVol = (1 + ((xPos + DeviceWidth * 0.5) / DeviceWidth) * -1) * -40;

  useEffect(() => {
    soloPitchVolume(spawnNum, xVol, yFreq, playing);
  }, [spawnNum, xVol, playing, range, yFreq]);

  return (
    <>
      <Pressable
        style={[
          styles.box,
          {
            backgroundColor: `rgba(${primeColor}, 0.75)`,
            borderColor: `rgba(${primeColor}, 0.75)`,
          },
        ]}
        android_ripple={{
          color: `rgba(${primeColor}, 0.2)`,
        }}
        onPress={() => {
          tap();
        }}
        onLongPress={() => {
          long();
        }}
      >
        <Image
          source={playing ? images.sineBlack : images.sineBlackPng}
          style={[styles.image, {opacity: playing ? 1 : 0.666}]}
        />
        <Menu
          name={spawnNum.toString()}
          onBackdropPress={() => setOpened(!opened)}
          opened={opened}
          renderer={Popover}
          rendererProps={{
            anchorStyle: {
              backgroundColor: `rgba(${primeColor}, 0.2)`,
            },
          }}
          style={styles.menu}
        >
          <MenuTrigger style={styles.trigger} />
          <MenuOptions
            customStyles={optionsStyles}
            style={{
              backgroundColor: `rgba(${primeColor}, 0.2)`,
            }}
          >
            <MenuOption onSelect={() => setOpened(!opened)}>
              <Text>
                <Icon
                  name={'close-box-outline'}
                  size={32}
                  color={`rgba(${primeColor}, 0.75)`}
                />
              </Text>
            </MenuOption>

            <MenuOption onSelect={() => removeKind(spawnNum)}>
              <Button
                color={`rgba(${primeColor}, 0.75)`}
                text=" Remove"
                icon="trash-can-outline"
              />
            </MenuOption>
          </MenuOptions>
        </Menu>
        <View style={styles.textBox}>
          <P>{xVol.toFixed(2).toString()} db</P>
          <P>{yFreq.toFixed(0).toString()} hz</P>
        </View>
      </Pressable>
    </>
  );

  function tap() {
    soloPause(spawnNum, !playing);
    setPlaying(!playing);
  }

  function long() {
    setOpened(!opened);
  }

  function removeKind() {
    soloDispose(spawnNum);
    dispatchSpawn({type: 'REMOVE_SINGLE_SPAWN', payload: spawnNum});
  }
}; // Knob

function P(props) {
  return (
    <Text {...props} style={[props.style, styles.text, _style.textStyle]} />
  );
}

function Button(props) {
  return (
    <View style={_style.button}>
      <Text>
        <Icon name={props.icon} size={26} color={props.color} />
      </Text>
      <Text style={_style.textStyle}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    borderRadius: 4,
    borderStyle: 'dotted',
    borderWidth: 2,
    height: 60,
    overflow: 'hidden',
    width: 60,
    zIndex: 200,
  },
  image: {
    height: 60,
    position: 'absolute',
    width: 60,
  },
  textBox: {
    height: 60,
    justifyContent: 'space-between',
    paddingBottom: 5,
    position: 'absolute',
    width: 60,
  },
  text: {
    fontSize: 11,
    textAlign: 'center',
  },
  trigger: {
    width: 0,
    height: 0,
    overflow: 'hidden',
  },
});

const optionsStyles = {
  optionsContainer: {
    backgroundColor: color.primary,
    padding: 1,
  },
  optionWrapper: {
    margin: 3,
  },
  optionText: {
    color: '#fff',
  },
};

export default Knob;
