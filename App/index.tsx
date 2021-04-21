import React from 'react';
import {StatusBar} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import WebAudio from './tone/WebAudio';
import {Interface} from './interface';
import {LoadStorage} from './interface/storage/LoadStorage';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <MenuProvider>
        <LoadStorage />
        <WebAudio />
        <Interface />
      </MenuProvider>
    </>
  );
};

export default App;
