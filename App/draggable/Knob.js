import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {images} from './img';
// import {RemoveSpawn} from 'rn-spawn-component';

const Knob = props => {
  const {name, spawnNum, xPos, yPos} = props;
  const [playing, setPlaying] = useState(false);
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
        }}>
        <Image
          source={playing ? images.sineFff : images.sinePaused}
          style={styles.image}
        />
        <P>{[name, ': ', spawnNum.toString()]}</P>
        <P>{xPos.toFixed(1).toString()}</P>
        <P>{yPos.toFixed(1).toString()}</P>
      </Pressable>
    </>
  );

  function tap() {
    setPlaying(!playing);
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
    height: 50,
    margin: 10,
    width: 50,
    zIndex: 200,
  },
  image: {
    height: 50,
    opacity: 0.5,
    position: 'absolute',
    width: 50,
  },
  text: {
    color: '#000',
  },
});

export default Knob;
