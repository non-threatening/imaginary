import React from 'react';
import {StatusBar} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import WebAudio from './tone/WebAudio';
import {Interface} from './interface';
import {LoadStorage} from './interface/storage/LoadStorage';
import {
  SettingsReducer,
  SettingsProvider,
} from './interface/storage/useSettings';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SettingsProvider SettingsReducer={SettingsReducer}>
        <MenuProvider>
          <LoadStorage />
          <WebAudio />
          <Interface />
        </MenuProvider>
      </SettingsProvider>
    </>
  );
};

export default App;
