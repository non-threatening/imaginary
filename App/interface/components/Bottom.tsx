/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {images} from '../../draggable/img';
import {AddSpawn, useSpawnArray} from '../../rn-spawn-component';
import {masterDisposeAllOsc, masterMute} from '../../tone';
import _style from '../style';
import {useSettings} from '../storage/useSettings';
import {Button} from './Button';
import {SpawnMenu} from './SpawnMenu';
import {Toggle} from './Toggle';

export function Bottom() {
  const [toggled, setToggled] = useState(false);
  const [{}, dispatchSpawn] = useSpawnArray();
  const [{prime}] = useSettings();
  const primeColor = [
    prime ? prime.red : 0,
    prime ? prime.green : 255,
    prime ? prime.blue : 255,
  ];
  return (
    <>
      <View style={{backgroundColor: '#000'}}>
        <View
          style={[
            styles.bottom,
            {
              backgroundColor: `rgba(${primeColor}, 0.2)`,
              borderColor: `rgba(${primeColor}, 0.75)`,
            },
          ]}
        >
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

          <Button onPress={() => removeAll()} text=" Refresh" icon="broom" />

          <Toggle
            onPress={() => muteAll()}
            text=" Mute All"
            icon={toggled ? 'volume-variant-off' : 'volume-vibrate'}
            toggled={toggled}
          />

          <SpawnMenu />
        </View>
      </View>
    </>
  );

  function removeAll() {
    masterDisposeAllOsc();
    dispatchSpawn({type: 'KILL_ALL_SPAWN'});
  }

  function muteAll() {
    setToggled(!toggled);
    masterMute(-1, toggled);
  }
}

const styles = StyleSheet.create({
  bottom: {
    alignItems: 'center',
    borderStyle: 'dotted',
    borderRadius: 1,
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 120,
    justifyContent: 'center',
  },
  imageBox: {
    borderRadius: 2,
    borderWidth: 1,
  },
  image: {
    height: 13,
    width: 13,
  },
});
