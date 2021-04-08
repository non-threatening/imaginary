/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-native-draggable';

import {MyComponent} from './MyComponent';
import {
  SpawnProvider,
  SpawnController,
  AddSpawn,
  ClearSpawns,
  RemoveAll,
} from 'rn-spawn-component';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SpawnProvider>
        <SafeAreaView>
          <View style={styles.body}>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <SpawnController
                startCount={2}
                spawn={<MyComponent />}
                name="myComponent"
              />

              <SpawnController
                startCount={21}
                name="text"
                spawn={
                  <View>
                    <Text>Hello World</Text>
                  </View>
                }
              />
            </ScrollView>

            <View>
              <View style={styles.row}>
                <AddSpawn name="text" label="Add Text" />
                <ClearSpawns name="text" label="Clear Text" />
              </View>

              <View style={styles.row}>
                <AddSpawn name="myComponent" label="Spawn Component" />
                <ClearSpawns name="myComponent" label="Clear Spawns" />
              </View>

              <View style={styles.row}>
                <RemoveAll
                  prepend={<FontAwesomeIcon icon={faCoffee} size={32} />}
                  label=" Remove "
                  android_ripple={{
                    color: 'white',
                    radius: 10,
                  }}
                  append={<Text>all</Text>}
                  buttonColor={'thistle'}
                  pressedColor={'thistle'}
                  style={{
                    borderRadius: 10,
                    width: 300,
                  }}
                  textStyle={{color: 'brown', fontSize: 21}}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </SpawnProvider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  body: {
    backgroundColor: '#666',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default App;
