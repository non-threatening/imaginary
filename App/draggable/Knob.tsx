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
import {useSpawnArray} from '../rn-spawn-component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {images} from './img';
import _style, {color, stageHeight, DeviceWidth} from '../interface/style';
import {soloDispose, soloPause, soloPitchVolume} from '../tone';
import {useSettings} from '../interface/storage/useSettings';

const Knob = props => {
  const [{}, dispatchSpawn] = useSpawnArray();
  const {name, spawnNum, xPos, yPos = 400} = props;
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);
  const [{prime, range}] = useSettings();
  const primeColor = [prime.red, prime.green, prime.blue];

  // prettier-ignore
  let yFreq =
    ((1 + ((yPos + stageHeight * 0.5) * -1) / stageHeight) * (range[1] - range[0])) + range[0];

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
          source={playing ? images.sineFff : images.sinePaused}
          style={styles.image}
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
        <P>{[name, ': ', spawnNum.toString()]}</P>
        <P>{xVol.toFixed(2).toString()}</P>
        <P>{yFreq.toFixed(0).toString()}</P>
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
  return <Text {...props} style={[props.style, styles.text]} />;
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
    borderRadius: 5,
    height: 60,
    overflow: 'hidden',
    padding: 2,
    width: 60,
    zIndex: 200,
  },
  image: {
    height: 60,
    position: 'absolute',
    width: 60,
  },
  text: {
    color: '#000',
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
