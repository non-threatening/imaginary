import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
// import {RemoveSpawn} from 'rn-spawn-component';

const Knob = props => {
  const {spawnNum, xPos, yPos} = props;
  return (
    <>
      {/* <RemoveSpawn spawn={spawnNum} label={'Kill Me'} /> */}
      <Pressable
        style={styles.box}
        onPress={() => {
          console.warn('thing');
        }}
        onLongPress={() => {
          console.warn('long thing');
        }}>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
          style={styles.image}
        />
        <P>{spawnNum.toString()}</P>
        <P>{xPos.toFixed(1).toString()}</P>
        <P>{yPos.toFixed(1).toString()}</P>
      </Pressable>
    </>
  );
};

function P(props) {
  return <Text {...props} style={[props.style, styles.text]} />;
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
  image: {
    height: 50,
    position: 'absolute',
    width: 50,
  },
  text: {
    color: '#fff',
  },
});

export default Knob;
