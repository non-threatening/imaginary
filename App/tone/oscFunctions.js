export function PostMessage(string) {
  console.log(string);
  return this.webview.injectJavaScript(`
    window.ReactNativeWebView.postMessage(${string});
  `);
}
// setTimeout(() => {
//   PostMessage(('post message function')
// //   PostMessage(console.log('post message function'))
// }, 1000)

export function KillSingleOsc(osc) {
  return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(-Infinity, 0.2);
    setTimeout(() => {
      osc[${osc}].dispose();
    }, 201);
  `);
}

export function SetSingleVolume(osc, db) {
  return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(${db}, 0.05);
  `);
}
