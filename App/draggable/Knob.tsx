import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {images} from './img';
import {KnobMenu} from './KnobMenu';
import {soloPause, soloPitchVolume} from '../tone';
import _style, {stageHeight, DeviceWidth} from '../interface/style';
import {useSettings} from '../interface/storage/useSettings';

interface knobProps {
  spawnNum: number;
  xPos: number;
  yPos: number;
}

const Knob = ({spawnNum, xPos, yPos}: knobProps) => {
  const [playing, setPlaying] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
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
  let yFreq =
    36 + (minRange + (normalize * (maxRange - minRange)) / stageHeight);

  let xVol = (1 + ((xPos + DeviceWidth * 0.5) / DeviceWidth) * -1) * -40;

  useEffect(() => {
    soloPitchVolume(spawnNum, xVol, yFreq, playing);
  }, [spawnNum, xVol, playing, range, yFreq]);

  return (
    <Pressable
      android_ripple={{
        color: `rgba(${primeColor}, 0.2)`,
      }}
      onLongPress={() => {
        long();
      }}
      onPress={() => {
        tap();
      }}
      style={[
        styles.box,
        {
          backgroundColor: `rgba(${primeColor}, 0.75)`,
          borderColor: `rgba(${primeColor}, 0.75)`,
        },
      ]}
    >
      <Image
        source={playing ? images.sineBlack : images.sineBlackPng}
        style={[styles.image, {opacity: playing ? 1 : 0.666}]}
      />
      <KnobMenu
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        spawnNum={spawnNum}
      />
      <View style={styles.textBox}>
        <P>{xVol.toFixed(2).toString()} db</P>
        <P>{yFreq.toFixed(0).toString()} hz</P>
      </View>
    </Pressable>
  );

  function tap() {
    soloPause(spawnNum, !playing);
    setPlaying(!playing);
  }

  function long() {
    setMenuOpened(!menuOpened);
  }
}; // Knob

function P(props) {
  return <Text {...props} style={[styles.text, _style.textStyle]} />;
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
});

export default Knob;
