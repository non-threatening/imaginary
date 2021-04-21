import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {AddSpawn, ClearSpawns, RemoveAll} from '../rn-spawn-component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {postMessage, Sweep} from '../tone';

import _style, {color} from '../style';

export function SpawnMenu() {
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
        <View style={styles.modalView}>
          <View style={styles.row}>
            <AddSpawn
              android_ripple={{
                color: color.ripple,
              }}
              label="Spawn Component"
              name="sine"
              style={[_style.button]}
              textStyle={_style.textStyle}
            />
            <ClearSpawns
              android_ripple={{
                color: color.ripple,
              }}
              label="Clear Spawns"
              name="sine"
              style={[_style.button]}
              textStyle={_style.textStyle}
            />
          </View>

          <View style={styles.row}>
            <RemoveAll
              prepend={
                <Icon name="bell-outline" size={18} color={color.outline} />
              }
              label=" Remove"
              android_ripple={{
                color: color.ripple,
              }}
              style={[_style.button]}
              textStyle={_style.textStyle}
            />
          </View>
          <Pressable
            android_ripple={{
              color: color.ripple,
            }}
            style={[_style.button]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={_style.textStyle}>Hide Modal</Text>
          </Pressable>
          <Pressable
            android_ripple={{
              color: color.ripple,
            }}
            style={[_style.button]}
            onPress={() => postMessage('Webview connected')}
          >
            <Text style={_style.textStyle}>postMessage</Text>
          </Pressable>
          <Pressable
            android_ripple={{
              color: color.ripple,
            }}
            style={[_style.button]}
            onPress={() => Sweep()}
          >
            <Text style={_style.textStyle}>sweep</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable
        android_ripple={{
          color: color.ripple,
        }}
        style={[_style.button]}
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
