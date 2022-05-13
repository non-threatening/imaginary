import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

import {images} from '../../draggable/img';
import {AddSpawn} from '../../rn-spawn-component';
import {useSettings} from '../storage/useSettings';
// import {postMessage, Sweep} from '../../tone';
import _style from '../style';
import {Picker} from './ColorPicker';
import {Button} from '../parts';
import {RangeSlider} from './RangeSlider';

// eslint-disable-next-line react-hooks/rules-of-hooks
const [{prime}] = useSettings();
export function SpawnMenu() {
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
        onBackdropPress={() => setModalVisible(!modalVisible)}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        transparent={true}
        visible={modalVisible}
        useNativeDriver={true}
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
            style={{left: 5, padding: 2, position: 'absolute', top: 8}}
            text={''}
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

          <RangeSlider />

          <Picker />
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
    alignSelf: 'center',
    margin: 15,
    borderRadius: 3,
    borderStyle: 'dotted',
    borderWidth: 1,
    padding: 15,
    shadowColor: '#000',
    elevation: 5,
    width: 300,
  },
});
