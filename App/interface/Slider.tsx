/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export function RangeSlider() {
  const [multiSliderValue, setMultiSliderValue] = useState([3, 70]);

  useEffect(() => {
    console.log(multiSliderValue);
  }, [multiSliderValue]);

  return (
    <View
      style={{flexDirection: 'row', flex: 1, justifyContent: 'space-evenly'}}
    >
      <MultiSlider
        values={[multiSliderValue[0], multiSliderValue[1]]}
        sliderLength={250}
        onValuesChange={thing => setMultiSliderValue(thing)}
        min={0}
        max={100}
        step={1}
        allowOverlap
        snapped
      />
    </View>
  );

  // function updateRange() {

  // }
}
