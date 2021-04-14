import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {AddSpawn, ClearSpawns, RemoveAll} from '../rn-spawn-component';
// import {MaterialCommunityIcons} from '@expo/vector-icons';
import {PostMessage, Sweep} from '../tone/oscFunctions';

import _style, {color} from '../style';

export function SpawnMenu() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <View style={styles.row}>
              <AddSpawn
                android_ripple={{
                  color: color.darkBlue,
                }}
                label="Spawn Component"
                name="sine"
                style={[_style.button]}
                textStyle={_style.textStyle}
              />
              <ClearSpawns
                android_ripple={{
                  color: color.darkBlue,
                }}
                label="Clear Spawns"
                name="sine"
                style={[_style.button]}
                textStyle={_style.textStyle}
              />
            </View>

            <View style={styles.row}>
              <RemoveAll
                // prepend={
                //   <MaterialCommunityIcons
                //     name="bell-outline"
                //     size={18}
                //     color="#05004c"
                //   />
                // }
                label=" Remove "
                android_ripple={{
                  color: color.darkBlue,
                }}
                buttonColor={'thistle'}
                pressedColor={'thistle'}
                style={[_style.button]}
                textStyle={_style.textStyle}
              />
            </View>
            <Pressable
              android_ripple={{
                color: color.darkBlue,
              }}
              style={[_style.button]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={_style.textStyle}>Hide Modal</Text>
            </Pressable>
            <Pressable
              android_ripple={{
                color: color.darkBlue,
              }}
              style={[_style.button]}
              onPress={() => PostMessage('Webview connected')}>
              <Text style={_style.textStyle}>PostMessage</Text>
            </Pressable>
            <Pressable
              android_ripple={{
                color: color.darkBlue,
              }}
              style={[_style.button]}
              onPress={() => Sweep()}>
              <Text style={_style.textStyle}>sweep</Text>
            </Pressable>
          </View>
        </Modal>
        <Pressable
          android_ripple={{
            color: color.darkBlue,
          }}
          style={[_style.button]}
          onPress={() => setModalVisible(true)}>
          <Text style={_style.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'rgba(200,200,200,.9)',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
});
