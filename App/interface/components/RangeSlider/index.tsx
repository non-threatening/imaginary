import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {storeData} from '../../storage/storeData';
import {useSettings} from '../../storage/useSettings';
import Label from './SliderLabel';

const json = require('../../../assets/notes440.json');
const items = json.notes;

export function RangeSlider() {
  const [{prime, range}, dispatch] = useSettings();
  const primeColor = [
    prime ? prime.red : 0,
    prime ? prime.green : 255,
    prime ? prime.blue : 255,
  ];
  const minRange = range ? range[0] : 0;
  const maxRange = range ? range[1] : 2000;

  const [multiSliderValue, setMultiSliderValue] = useState(range);

  useEffect(() => {
    if (multiSliderValue) {
      storeData('@range', multiSliderValue);
      dispatch({
        type: 'RANGE',
        range: multiSliderValue,
      });
    }
  }, [multiSliderValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const noteList = items.map(item => {
    return item.frequency;
  });

  return (
    <View style={styles.box}>
      <View
        style={[
          styles.outline,
          {
            borderColor: `rgba(${primeColor}, 0.75)`,
          },
        ]}
      >
        <MultiSlider
          customLabel={Label}
          enableLabel
          optionsArray={noteList}
          onValuesChange={thing => setMultiSliderValue(thing)}
          sliderLength={200}
          values={[minRange, maxRange]}
          trackStyle={{backgroundColor: `rgba(${primeColor}, 0.75)`}}
          markerStyle={{backgroundColor: `rgba(${primeColor}, 0.75)`}}
          selectedStyle={{backgroundColor: `rgba(${primeColor}, 0.75)`}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  outline: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderStyle: 'dotted',
    borderRadius: 4,
    borderWidth: 1,
    height: 200,
    justifyContent: 'space-evenly',
    marginTop: 5,
    paddingTop: 50,
    width: 250,
  },
});
