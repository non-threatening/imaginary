import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';

import WebAudio from './tone/WebAudio';
import {Interface} from './interface';
import {
  LoadStorage,
  SettingsReducer,
  SettingsProvider,
} from './interface/storage';

const App = () => {
  return (
    <>
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
