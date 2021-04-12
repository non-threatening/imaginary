/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent, useState} from 'react';
import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {AddSpawn, ClearSpawns, RemoveAll} from 'rn-spawn-component';
import {MaterialCommunityIcons} from '@expo/vector-icons';

// interface SpawnMenuProps {
//   // modalVisible?: boolean;
// }

interface MenuVisible {
  modalVisible?: boolean;
}

export const SpawnMenu: FunctionComponent<SpawnMenuProps> = () => {
  const [modalVisible, setModalVisible] = useState<MenuVisible>(false);
  return (
    <>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.row}>
                <AddSpawn name="Knob" label="Spawn Component" />
                <ClearSpawns name="Knob" label="Clear Spawns" />
              </View>

              <View style={styles.row}>
                <RemoveAll
                  prepend={
                    <MaterialCommunityIcons
                      name="bell-outline"
                      size={24}
                      color="#fff"
                    />
                  }
                  label=" Remove "
                  android_ripple={{
                    color: '#000',
                  }}
                  buttonColor={'thistle'}
                  pressedColor={'thistle'}
                  style={{
                    borderRadius: 10,
                    width: 300,
                  }}
                  textStyle={{color: 'brown', fontSize: 21}}
                />
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#696969',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
