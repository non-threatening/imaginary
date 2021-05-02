/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

import _style, {color} from '../../style';

const sliderRadius = 3;
const width = 90;
export default class Label extends React.Component {
  static propTypes = {
    oneMarkerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    twoMarkerValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    oneMarkerLeftPosition: PropTypes.number,
    twoMarkerLeftPosition: PropTypes.number,

    oneMarkerPressed: PropTypes.bool,
    twoMarkerPressed: PropTypes.bool,
  };

  render() {
    const {
      oneMarkerValue,
      twoMarkerValue,
      oneMarkerLeftPosition,
      twoMarkerLeftPosition,
      oneMarkerPressed,
      twoMarkerPressed,
    } = this.props;

    return (
      <View style={{position: 'relative'}}>
        {Number.isFinite(oneMarkerLeftPosition) &&
          Number.isFinite(oneMarkerValue) && (
            <View
              style={[
                styles.sliderLabel,
                styles.sliderLabelMax,
                {left: oneMarkerLeftPosition - width / 2 + sliderRadius},
                oneMarkerPressed && styles.markerPressed,
              ]}
            >
              <Text style={[styles.sliderLabelText]}>
                {oneMarkerValue.toFixed(0)} hz
              </Text>
            </View>
          )}

        {Number.isFinite(twoMarkerLeftPosition) &&
          Number.isFinite(twoMarkerValue) && (
            <View
              style={[
                styles.sliderLabel,
                {left: twoMarkerLeftPosition - width / 2 + sliderRadius},
                twoMarkerPressed && styles.markerPressed,
              ]}
            >
              <Text style={styles.sliderLabelText}>
                {twoMarkerValue.toFixed(0)} hz
              </Text>
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderLabel: {
    position: 'absolute',
    bottom: 0,
    minWidth: width,
    padding: 8,
    backgroundColor: color.secondary,
  },
  sliderLabelMax: {
    bottom: 30,
  },
  sliderLabelText: {
    alignItems: 'center',
    textAlign: 'center',
    color: _style.textStyle.color,
  },
  markerPressed: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
});
