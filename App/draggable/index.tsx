import React, {Component} from 'react';
import {Animated, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import {
  // LongPressGestureHandler,
  // LongPressGestureHandlerStateChangeEvent,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerStateChangeEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';

import {USE_NATIVE_DRIVER} from './config';

type DraggableBoxProps = {
  minDist?: number;
  boxStyle?: StyleProp<ViewStyle>;
};

export class DraggableBox extends Component<DraggableBoxProps> {
  private translateX: Animated.Value;
  private translateY: Animated.Value;
  private lastOffset: {x: number; y: number};
  private onGestureEvent: (event: PanGestureHandlerGestureEvent) => void;
  private doubleTapRef = React.createRef<TapGestureHandler>();
  /*   private onHandlerStateChange = (
    event: LongPressGestureHandlerStateChangeEvent,
  ) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      console.warn("I'm being pressed for so long");
    }
  };
 */
  private onSingleTap = (event: TapGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      console.warn('tap');
    }
  };
  private onDoubleTap = (event: TapGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      console.warn('Double tap');
    }
  };

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
      }),
      this.translateY.addListener(thing => {
        console.log(thing.value);
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
        {/* <LongPressGestureHandler
          onHandlerStateChange={this.onHandlerStateChange}
          minDurationMs={800}> */}
        <TapGestureHandler
          onHandlerStateChange={this.onSingleTap}
          waitFor={this.doubleTapRef}>
          <TapGestureHandler
            ref={this.doubleTapRef}
            onHandlerStateChange={this.onDoubleTap}
            numberOfTaps={2}>
            <Animated.View
              style={[
                styles.box,
                {
                  transform: [
                    {translateX: this.translateX},
                    {translateY: this.translateY},
                  ],
                },
                this.props.boxStyle,
              ]}
            />
          </TapGestureHandler>
        </TapGestureHandler>
        {/* </LongPressGestureHandler> */}
      </PanGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
});
