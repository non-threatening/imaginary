import React from 'react';
import {StatusBar} from 'react-native';

import {Interface} from './interface';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Interface />
    </>
  );
};

export default App;
