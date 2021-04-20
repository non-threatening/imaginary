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
import {color} from '../style';
import {soloPause, soloPitchVolume} from '../tone';
import _style from '../style';

const Knob = props => {
  const [{}, dispatchSpawn] = useSpawnArray();
  const {name, spawnNum, xPos, yPos = 400} = props;
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    soloPitchVolume(spawnNum, xPos * 50 - 50, yPos * 1000, playing);
  }, [spawnNum, xPos, yPos, playing]);

  return (
    <>
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
            <MenuOption onSelect={() => setOpened(!opened)}>
              <Text>
                <Icon
                  name={'close-box-outline'}
                  size={32}
                  color={color.outline}
                />
              </Text>
            </MenuOption>

            <MenuOption onSelect={() => removeKind(spawnNum)}>
              <Button text=" Remove" icon="close-box-outline" />
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

  function removeKind() {
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
        <Icon name={props.icon} size={26} color={color.outline} />
      </Text>
      <Text style={_style.textStyle}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  anchorStyle: {
    backgroundColor: color.outline,
  },
  box: {
    alignSelf: 'center',
    backgroundColor: color.outline,
    borderRadius: 5,
    height: 60,
    padding: 2,
    width: 60,
    zIndex: 200,
  },
  image: {
    height: 60,
    opacity: 1,
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
    borderColor: color.outline,
    borderStyle: 'dotted',
    borderWidth: 1,
  },
  optionWrapper: {
    margin: 3,
  },
  optionText: {
    color: '#fff',
  },
};

export default Knob;
