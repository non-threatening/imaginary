import React from 'react';
import {StatusBar} from 'react-native';

import WebAudio from './tone/WebAudio';
import {Interface} from './interface';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <WebAudio />
      <Interface />
    </>
  );
};

export default App;
