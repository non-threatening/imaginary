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

import {images} from './img';
import {color} from '../style';
import {soloPause, soloPitchVolume} from '../tone';
import _style from '../style';

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
          color: color.ripple,
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
        <Menu
          name={spawnNum.toString()}
          onBackdropPress={() => setOpened(!opened)}
          opened={opened}
          renderer={Popover}
          rendererProps={{anchorStyle: styles.anchorStyle}}
          style={styles.menu}
        >
          <MenuTrigger style={styles.trigger} />
          <MenuOptions customStyles={optionsStyles}>
            <MenuOption onSelect={() => console.warn('Save')}>
              <Button text="Sav" />
            </MenuOption>
            <MenuOption onSelect={() => setOpened(!opened)}>
              <Button text="Close" />
            </MenuOption>
          </MenuOptions>
        </Menu>
        <P>{xPos.toFixed(3).toString()}</P>
        <P>{yPos.toFixed(3).toString()}</P>
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

function Button(props) {
  return (
    <View style={_style.button}>
      <Text style={_style.textStyle}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  anchorStyle: {
    backgroundColor: 'rgba(0, 255, 0, 0.666)',
  },
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

const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
    padding: 1,
    borderColor: 'rgb(0, 255, 0)',
    borderStyle: 'dotted',
    borderWidth: 1,
  },
  optionWrapper: {
    // backgroundColor: 'rgba(255, 0, 0, 0.5)',
    margin: 3,
  },
  optionText: {
    color: '#fff',
  },
};

export default Knob;
