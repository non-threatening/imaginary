export * from './oscFunctions';
export * from './oscSolo';

/* Webview message return */
export function postMessage(string) {
  return this.webview.injectJavaScript(`
    window.ReactNativeWebView.postMessage('${string}');
  `);
}

export function Sweep() {
  return this.webview.injectJavaScript(`
      osc[666] = new Tone.Oscillator({
        'type': 'sine',
        'volume': '-Infinity',
        'frequency': '666'
      }).chain(output, Tone.Master).start();
      osc[666].volume.rampTo(-1, 0.2);
      osc[666].frequency.rampTo(100, 5);
      
      setTimeout(() => {
        osc[666].volume.rampTo(-Infinity, 0.2);
      }, (5 * 1000 - 200));

      setTimeout(() => {
        osc[666].dispose();
      }, (5 * 1000));
    `);
}
