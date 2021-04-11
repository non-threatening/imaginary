import React, {Component} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';
import Knob from './knob';

import {USE_NATIVE_DRIVER} from './config';

type DraggableBoxProps = {
  boxStyle?: StyleProp<ViewStyle>;
  minDist?: number;
  spawnNum?: number;
};

let x = 0;
let y = 0;

export class DraggableBox extends Component<DraggableBoxProps> {
  private translateX: Animated.Value;
  private translateY: Animated.Value;
  private lastOffset: {x: number; y: number};
  private onGestureEvent: (event: PanGestureHandlerGestureEvent) => void;

  constructor(props: DraggableBoxProps) {
    super(props);
    this.translateX = new Animated.Value(0);
    this.translateY = new Animated.Value(0);
    this.lastOffset = {x: 0, y: 0};
    this.onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this.translateX,
            translationY: this.translateY,
          },
        },
      ],
      {useNativeDriver: USE_NATIVE_DRIVER},

      // Listeners
      this.translateX.addListener(thing => {
        console.log(thing.value);
        // x = thing.value;
      }),
      this.translateY.addListener(thing => {
        console.log(thing.value);
        // y = thing.value;
      }),
    );
  }
  private onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.lastOffset.x += event.nativeEvent.translationX;
      this.lastOffset.y += event.nativeEvent.translationY;
      this.translateX.setOffset(this.lastOffset.x);
      this.translateX.setValue(0);
      this.translateY.setOffset(this.lastOffset.y);
      this.translateY.setValue(0);
    }
  };
  render() {
    return (
      <PanGestureHandler
        {...this.props}
        onGestureEvent={this.onGestureEvent}
        onHandlerStateChange={this.onHandlerStateChange}
        minDist={this.props.minDist}>
        <Animated.View
          style={[
            {
              transform: [
                {translateX: this.translateX},
                {translateY: this.translateY},
              ],
            },
            this.props.boxStyle,
          ]}>
          <Knob spawnNum={this.props.spawnNum} x={x} y={y} />
        </Animated.View>
      </PanGestureHandler>
    );
  }
}
