import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

import {AddSpawn, ClearSpawns, RemoveAll} from '../rn-spawn-component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {postMessage, Sweep} from '../tone';
import _style, {color, Picker} from '../style';
import {useSettings} from './storage/useSettings';

export function SpawnMenu() {
  const [{prime}] = useSettings();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={[
            styles.modalView,
            {
              backgroundColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.2)`,
              borderColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`,
            },
          ]}
        >
          <View style={styles.row}>
            <AddSpawn
              android_ripple={{
                color: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.2)`,
              }}
              label="Spawn Component"
              name="sine"
              style={[
                _style.button,
                {
                  borderColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`,
                },
              ]}
              textStyle={_style.textStyle}
            />
            <ClearSpawns
              android_ripple={{
                color: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.2)`,
              }}
              label="Clear Spawns"
              name="sine"
              style={[
                _style.button,
                {
                  borderColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`,
                },
              ]}
              textStyle={_style.textStyle}
            />
          </View>

          <View style={styles.row}>
            <RemoveAll
              prepend={
                <Icon
                  name="bell-outline"
                  size={18}
                  color={`rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`}
                />
              }
              label=" Remove"
              android_ripple={{
                color: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.2)`,
              }}
              style={[
                _style.button,
                {
                  borderColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`,
                },
              ]}
              textStyle={_style.textStyle}
            />
          </View>
          <Pressable
            android_ripple={{
              color: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.2)`,
            }}
            style={[
              _style.button,
              {
                borderColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`,
              },
            ]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={_style.textStyle}>Hide Modal</Text>
          </Pressable>
          <Pressable
            android_ripple={{
              color: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.2)`,
            }}
            style={[
              _style.button,
              {
                borderColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`,
              },
            ]}
            onPress={() => postMessage('Webview connected')}
          >
            <Text style={_style.textStyle}>postMessage</Text>
          </Pressable>
          <Pressable
            android_ripple={{
              color: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.2)`,
            }}
            style={[
              _style.button,
              {
                borderColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`,
              },
            ]}
            onPress={() => Sweep()}
          >
            <Text style={_style.textStyle}>sweep</Text>
          </Pressable>
          <View style={{height: 200, width: 200}}>
            <Picker />
          </View>
        </View>
      </Modal>
      <Pressable
        android_ripple={{
          color: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.2)`,
        }}
        style={[
          _style.button,
          {
            borderColor: `rgba(${prime.red}, ${prime.green}, ${prime.blue}, 0.75)`,
          },
        ]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={_style.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalView: {
    margin: 15,
    backgroundColor: color.primary,
    borderColor: color.outline,
    borderRadius: 3,
    borderStyle: 'dotted',
    borderWidth: 1,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
});
