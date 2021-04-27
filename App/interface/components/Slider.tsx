/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {storeData} from '../storage/storeData';
import {useSettings} from '../storage/useSettings';
import Label from './SliderLabel';

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
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderColor: `rgba(${primeColor}, 0.75)`,
          borderStyle: 'dotted',
          borderRadius: 4,
          borderWidth: 1,
          flexDirection: 'row',
          height: 100,
          justifyContent: 'space-evenly',
          marginTop: 5,
          paddingTop: 50,
          width: 250,
        }}
      >
        <MultiSlider
          values={[range[0], range[1]]}
          sliderLength={200}
          onValuesChange={thing => setMultiSliderValue(thing)}
          min={0}
          max={8000}
          step={1}
          snapped
          enableLabel
          customLabel={Label}
          trackStyle={{backgroundColor: `rgba(${primeColor}, 0.75)`}}
          markerStyle={{backgroundColor: `rgba(${primeColor}, 0.75)`}}
          selectedStyle={{backgroundColor: `rgba(${primeColor}, 0.75)`}}
        />
      </View>
    </View>
  );
}
