import React from 'react';
import {StatusBar} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import WebAudio from './tone/WebAudio';
import {Interface} from './interface';

const App = () => {
  return (
    <>
        <StatusBar barStyle="dark-content" />
      <MenuProvider>
        <WebAudio />
        <Interface />
      </MenuProvider>
    </>
  );
};

export default App;
