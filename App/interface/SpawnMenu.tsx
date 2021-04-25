import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';

import {Button} from './Button';
import {AddSpawn, ClearSpawns, RemoveAll} from '../rn-spawn-component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {postMessage, Sweep} from '../tone';
import _style, {color, Picker} from '../style';
import {useSettings} from './storage/useSettings';

export function SpawnMenu() {
  const [{prime}] = useSettings();
  const primeColor = [prime.red, prime.green, prime.blue];

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
              backgroundColor: `rgba(${primeColor}, 0.2)`,
              borderColor: `rgba(${primeColor}, 0.75)`,
            },
          ]}
        >
          <View style={styles.row}>
            <AddSpawn
              android_ripple={{
                color: `rgba(${primeColor}, 0.2)`,
              }}
              label="Spawn Component"
              name="sine"
              style={[
                _style.button,
                {
                  borderColor: `rgba(${primeColor}, 0.75)`,
                },
              ]}
              textStyle={_style.textStyle}
            />
            <ClearSpawns
              android_ripple={{
                color: `rgba(${primeColor}, 0.2)`,
              }}
              label="Clear Spawns"
              name="sine"
              style={[
                _style.button,
                {
                  borderColor: `rgba(${primeColor}, 0.75)`,
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
                  color={`rgba(${primeColor}, 0.75)`}
                />
              }
              label=" Remove"
              android_ripple={{
                color: `rgba(${primeColor}, 0.2)`,
              }}
              style={[
                _style.button,
                {
                  borderColor: `rgba(${primeColor}, 0.75)`,
                },
              ]}
              textStyle={_style.textStyle}
            />
          </View>

          <Button
            onPress={() => setModalVisible(!modalVisible)}
            text=" Hide Modal"
            // icon="broom"
          />

          <Button
            onPress={() => postMessage('Webview connected')}
            text=" postMessage"
            // icon="broom"
          />

          <Button onPress={() => Sweep()} text=" sweep" icon="broom" />

          <View style={{height: 200, width: 200}}>
            <Picker />
          </View>
        </View>
      </Modal>
      <Button
        onPress={() => setModalVisible(true)}
        text=" Settings"
        icon="cog-outline"
      />
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
