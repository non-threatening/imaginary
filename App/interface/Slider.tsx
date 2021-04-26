/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {storeData} from './storage/storeData';
import {useSettings} from './storage/useSettings';

export function RangeSlider() {
  const [{prime, range}, dispatch] = useSettings();
  const primeColor = [prime.red, prime.green, prime.blue];
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

  return (
    <View
      style={{flexDirection: 'row', flex: 1, justifyContent: 'space-evenly'}}
    >
      <MultiSlider
        values={[range[0], range[1]]}
        sliderLength={250}
        onValuesChange={thing => setMultiSliderValue(thing)}
        min={0}
        max={1000}
        step={1}
        allowOverlap
        snapped
        trackStyle={{backgroundColor: `rgba(${primeColor}, 0.75)`}}
        markerStyle={{backgroundColor: `rgba(${primeColor}, 0.75)`}}
        selectedStyle={{backgroundColor: `rgba(${primeColor}, 0.75)`}}
      />
    </View>
  );
}
