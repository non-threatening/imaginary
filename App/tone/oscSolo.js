export function addOsc(osc, name, muted) {
  return this.webview.injectJavaScript(`
      osc[${osc}] = new Tone.Oscillator({
        'type': '${name}',
        'volume': '${muted}'
      }).chain(output, Tone.Master).start();
      `);
}

export function soloDispose(osc) {
  return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(-Infinity, 0.2);
    setTimeout(() => {
      osc[${osc}].dispose();
    }, 201);
  `);
}

export function soloPause(osc, db, playing) {
  if (!playing) {
    return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(-Infinity, 0.05);
    // window.ReactNativeWebView.postMessage('${osc}, ${db}, ${playing}');
  `);
  } else {
    return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(${db}, 0.05);
    // window.ReactNativeWebView.postMessage('${osc}, ${db}, ${playing}');
  `);
  }
}

export function soloVolume(osc, db) {
  return this.webview.injectJavaScript(`
    osc[${osc}].volume.rampTo(${db}, 0.05);
  `);
}

export function soloPitchVolume(osc, db, pitch, playing) {
  this.webview.injectJavaScript(`
    if (${playing}) {
      osc[${osc}].volume.rampTo(${db}, 0.1);
    }
    osc[${osc}].frequency.rampTo(${pitch}, 0.05);
    // window.ReactNativeWebView.postMessage('${osc}, ${db}, ${pitch}, ${playing}');
  `);
}
