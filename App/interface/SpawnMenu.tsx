import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {AddSpawn, ClearSpawns, RemoveAll} from 'rn-spawn-component';
import {MaterialCommunityIcons} from '@expo/vector-icons';

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
                label="Spawn Component"
                name="Knob"
                style={[styles.button]}
                textStyle={styles.textStyle}
              />
              <ClearSpawns
                label="Clear Spawns"
                name="Knob"
                style={[styles.button]}
                textStyle={styles.textStyle}
              />
            </View>

            <View style={styles.row}>
              <RemoveAll
                prepend={
                  <MaterialCommunityIcons
                    name="bell-outline"
                    size={18}
                    color="#05004c"
                  />
                }
                label=" Remove "
                android_ripple={{
                  color: '#05004c',
                }}
                buttonColor={'thistle'}
                pressedColor={'thistle'}
                style={[styles.button]}
                textStyle={styles.textStyle}
              />
            </View>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </Modal>
        <Pressable
          style={[styles.button]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
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
  button: {
    backgroundColor: '#d8bfd8',
    borderColor: '#daa1da',
    borderWidth: 1,
    borderRadius: 5,
    elevation: 2,
    padding: 10,
  },
  textStyle: {
    color: '#05004c',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
