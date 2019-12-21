document.body.focus();

const APP = {
  instrumentsName: [],
  currentInstrumentID: 0,
  currentLoop: [],
  isRecording: false,
  currentVolume: 63,
  currentVelocity: 63,
  keyboardFlags: {},
  notesByKey: {
    z: 36,
    s: 37,
    x: 38,
    d: 39,
    c: 40,
    v: 41,
    g: 42,
    b: 43,
    h: 44,
    n: 45,
    j: 46,
    m: 47,
    ",": 48,
    y: 48,
    7: 49,
    u: 50,
    8: 51,
    i: 52,
    o: 53,
    0: 54,
    p: 55,
    "-": 56,
    "[": 57,
    "=": 58,
    "]": 59,
    "\\": 60
  }
};