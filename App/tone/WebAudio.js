import React from 'react';
import {WebView} from 'react-native-webview';

import RNBootSplash from 'react-native-bootsplash';

const WebAudio = () => {
  return (
    <WebView
      originWhitelist={['*']}
      style={{height: 0, width: 0, opacity: 0}}
      source={{uri: 'file:///android_asset/index/index.html'}}
      ref={ref => (this.webview = ref)}
      onLoad={() => RNBootSplash.hide({fade: true})}
      onMessage={event => console.log(event.nativeEvent.data)}
      mediaPlaybackRequiresUserAction={false}
    />
  );
};

export default WebAudio;
