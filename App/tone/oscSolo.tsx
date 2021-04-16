export function addOsc(osc, name, muted) {
  return this.webview.injectJavaScript(`
      osc[${osc}] = new Tone.Oscillator({
        'type': '${name}',
        'volume': '${muted}'
      }).chain(output, Tone.Master).start();
      `);
}

export function soloDisposeOsc(osc) {
  return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(-Infinity, 0.2);
    setTimeout(() => {
      osc[${osc}].dispose();
    }, 201);
  `);
}

export function soloPause(osc, playing) {
  if (!playing) {
    return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(-Infinity, 0.05);
    window.ReactNativeWebView.postMessage('${osc} pause');
  `);
  } else {
    return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(-5, 0.05);
    window.ReactNativeWebView.postMessage('${osc} play');
  `);
  }
}

export function soloVolume(osc, db) {
  return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(${db}, 0.05);
  `);
}
