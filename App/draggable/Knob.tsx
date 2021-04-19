import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
const {Popover} = renderers;

import {images} from './img';
import {color} from '../style';
import {soloPause, soloPitchVolume} from '../tone';
// import {RemoveSpawn} from 'rn-spawn-component';

const Knob = props => {
  const {name, spawnNum, xPos, yPos = 400} = props;
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    soloPitchVolume(spawnNum, xPos * 50 - 50, yPos * 1000, playing);
  }, [spawnNum, xPos, yPos, playing]);

  return (
    <>
      {/* <RemoveSpawn spawn={spawnNum} label={'Kill Me'} /> */}
      <Pressable
        style={styles.box}
        android_ripple={{
          color: color.darkBlue,
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
        <P>{[name, ': ', spawnNum.toString()]}</P>
        <P>{xPos.toFixed(3).toString()}</P>
        <P>{yPos.toFixed(3).toString()}</P>
        <Menu name={spawnNum.toString()} opened={opened} renderer={Popover}>
          <MenuTrigger style={styles.trigger} />
          <MenuOptions>
            <MenuOption onSelect={() => alert('Save')} text="Save" />
            <MenuOption onSelect={() => setOpened(!opened)}>
              <P style={styles.text}>Close</P>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </Pressable>
    </>
  );

  function tap() {
    setPlaying(!playing);
    soloPause(spawnNum, !playing);
  }

  function long() {
    setOpened(!opened);
  }
}; // Knob

function P(props) {
  return <Text {...props} style={[props.style, styles.text]} />;
}

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    backgroundColor: 'thistle',
    borderRadius: 5,
    height: 60,
    padding: 2,
    width: 60,
    zIndex: 200,
  },
  image: {
    height: 60,
    opacity: 0.5,
    position: 'absolute',
    width: 60,
  },
  text: {
    color: '#000',
  },
  trigger: {
    width: 0,
    height: 0,
    overflow: 'hidden',
  },
});

export default Knob;
