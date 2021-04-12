import React from 'react';
import {Dimensions, StyleSheet, StatusBar, View} from 'react-native';

import {SpawnMenu} from './interface';
import {KnobWrap} from './draggable';
import {SpawnProvider, SpawnController} from 'rn-spawn-component';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SpawnProvider>
        <View style={styles.body}>
          <SpawnController startCount={1} spawn={<KnobWrap />} name="Knob" />
        </View>

        <SpawnMenu />
      </SpawnProvider>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    height: height - 150,
    width: width,
  },
});

export default App;
