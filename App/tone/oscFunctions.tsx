/* Webview test */
export function postMessage(string) {
  return this.webview.injectJavaScript(`
    window.ReactNativeWebView.postMessage('${string}');
  `);
}

/* Master */

export function KillAllOsc() {
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

export function SetVolumeMaster(db) {
  return this.webview.injectJavaScript(`
      Tone.Master.volume.rampTo(${db}, 0.05);
    `);
}

/* Knob specific */

export function AddOsc(osc, name, muted) {
  return this.webview.injectJavaScript(`
      osc[${osc}] = new Tone.Oscillator({
        'type': '${name}',
        'volume': '${muted}'
      }).chain(output, Tone.Master).start();
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

export function Sweep() {
  return this.webview.injectJavaScript(`
      osc[${0}] = new Tone.Oscillator({
        'type': 'sine',
        'volume': '-Infinity',
        'frequency': ${400}
      }).chain(output, Tone.Master).start();
      osc[${0}].volume.rampTo(${-1}, 0.2);
      osc[${0}].frequency.rampTo(${1500}, ${5});
      
      setTimeout(() => {
        osc[${0}].volume.rampTo(-Infinity, 0.2);
      }, (${5} * 1000 - 200));

      setTimeout(() => {
        osc[${0}].dispose();
      }, (${5} * 1000));
    `);
}
