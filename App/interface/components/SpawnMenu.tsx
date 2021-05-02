/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Modal, StyleSheet, View} from 'react-native';

import {images} from '../../draggable/img';
import {AddSpawn} from '../../rn-spawn-component';
import {useSettings} from '../storage/useSettings';
// import {postMessage, Sweep} from '../../tone';
import _style, {color, Picker} from '../style';
import {Button} from './Button';
import {RangeSlider} from './RangeSlider';

export function SpawnMenu() {
  const [{prime}] = useSettings();
  const primeColor = [
    prime ? prime.red : 0,
    prime ? prime.green : 255,
    prime ? prime.blue : 255,
  ];
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
          <Button
            onPress={() => setModalVisible(!modalVisible)}
            size={36}
            icon="close-box-outline"
            style={{left: 5, padding: 2, position: 'absolute', top: 5}}
          />

          <View style={styles.row}>
            <AddSpawn
              android_ripple={{
                color: `rgba(${primeColor}, 0.2)`,
              }}
              label="  New Sine"
              name="sine"
              prepend={
                <View
                  style={[
                    styles.imageBox,
                    {borderColor: `rgba(${primeColor}, 0.75)`},
                  ]}
                >
                  <Image
                    source={images.sineIcon}
                    style={[
                      styles.image,
                      {backgroundColor: `rgba(${primeColor}, 0.75)`},
                    ]}
                  />
                </View>
              }
              style={[
                _style.button,
                {
                  borderColor: `rgba(${primeColor}, 0.75)`,
                },
              ]}
              textStyle={_style.textStyle}
            />
          </View>

          {/* <View style={styles.row}>
            <Button
              onPress={() => postMessage('Webview connected')}
              text=" postMessage"
            />

            <Button onPress={() => Sweep()} text=" sweep" icon="broom" />
          </View> */}

          <View>
            <RangeSlider />
          </View>

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
  imageBox: {
    borderRadius: 2,
    borderWidth: 1,
  },
  image: {
    height: 13,
    width: 13,
  },
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
