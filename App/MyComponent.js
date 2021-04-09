// /* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import {/* Text, View, */ useWindowDimensions} from 'react-native';
// import {RemoveSpawn} from 'rn-spawn-component';
// import Draggable from 'react-native-draggable';
import {DraggableBox} from './draggable';
// import RnGestureHandler from './test';

export const MyComponent = props => {
  // const spawnNum = props.spawnNumber;
  // const window = useWindowDimensions();
  return (
    // <RnGestureHandler />

    <DraggableBox />

    /*     <Draggable
      x={window.width * 0.5}
      y={window.height * 0.5}
      renderColor='red'
      renderText='poo'
      onDrag={(event, gestureState) =>
        console.log(event.timeStamp, gestureState.moveX, gestureState.moveY)
      }
    />
 */

    // <View
    //   style={{
    //     backgroundColor: 'rgba(255, 255, 255, 0.2)',
    //     margin: 10,
    //     height: 80,
    //   }}>
    //   <View style={{alignItems: 'center'}}>
    //     <Text>spawnNumber: {spawnNum}</Text>
    //     <RemoveSpawn spawn={spawnNum} label={'Kill Me'} />
    //   </View>
    // </View>
  );
};
