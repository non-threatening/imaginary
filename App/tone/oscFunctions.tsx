/* Master */
export function masterDisposeAllOsc() {
  return this.webview.injectJavaScript(`
    osc.forEach((o) => {
      o.volume.rampTo(-Infinity, 0.2);
      setTimeout(() => {
        o.dispose();
      }, 201);
    })
    setTimeout(() => {
      osc.length = 0
    }, 202);
  `);
}

export function masterVolume(db) {
  return this.webview.injectJavaScript(`
      Tone.Master.volume.rampTo(${db}, 0.05);
    `);
}

export function masterMute(db, muted) {
  if (!muted) {
    return this.webview.injectJavaScript(`
    Tone.Master.volume.rampTo(-Infinity, 0.05);
    // window.ReactNativeWebView.postMessage('${db}, ${muted}');
  `);
  } else {
    return this.webview.injectJavaScript(`
    Tone.Master.volume.rampTo(${db}, 0.05);
    // window.ReactNativeWebView.postMessage('${db}, ${muted}');
  `);
  }
}
