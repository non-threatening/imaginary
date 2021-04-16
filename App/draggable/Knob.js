import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

import {images} from './img';
import {color} from '../style';
import {soloPause, soloPitchVolume} from '../tone';
// import {RemoveSpawn} from 'rn-spawn-component';

const Knob = props => {
  const {name, spawnNum, xPos, yPos} = props;
  const [playing, setPlaying] = useState(false);
  soloPitchVolume(spawnNum, xPos, yPos);
  return (
    <>
      {/* <RemoveSpawn spawn={spawnNum} label={'Kill Me'} /> */}
      <Pressable
        style={styles.box}
        onPress={() => {
          tap();
        }}
        onLongPress={() => {
          console.warn('long thing');
        }}
        android_ripple={{
          color: color.darkBlue,
        }}>
        <Image
          source={playing ? images.sineFff : images.sinePaused}
          style={styles.image}
        />
        <P>{[name, ': ', spawnNum.toString()]}</P>
        {/* <P>{xPos.toFixed(1).toString()}</P>
        <P>{yPos.toFixed(1).toString()}</P> */}
      </Pressable>
    </>
  );

  function tap() {
    setPlaying(!playing);
    soloPause(spawnNum, !playing);
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
});

export default Knob;
