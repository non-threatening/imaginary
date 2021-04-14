/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {WebView} from 'react-native-webview';

const WebAudio = () => {
  return (
    <WebView
      originWhitelist={['*']}
      style={{height: 0, width: 0, opacity: 0}}
      source={{uri: 'file:///android_asset/index/index.html'}}
      ref={ref => (this.webview = ref)}
      onLoad={() => console.log('WebView loaded')}
      onMessage={event => console.log(event.nativeEvent.data)}
      mediaPlaybackRequiresUserAction={false}
    />
  );
};

export default WebAudio;
