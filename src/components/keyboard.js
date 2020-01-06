function inputNoteOn(note, input) {
  const { cID, volume, noteKey, velocity } = note;
  APP.keyboardFlags[input] = {
    time: Date.now(),
    cID: cID
  };
  MIDI.setVolume(cID, volume);
  MIDI.noteOn(cID, noteKey, velocity, 0);
}

function inputNoteOff(noteKey, input, velocity = APP.currentVelocity) {
  if (APP.keyboardFlags[input]) {
    MIDI.noteOff(APP.keyboardFlags[input].cID, noteKey, 0);
    // delay = (Date.now() - APP.keyboardFlags[input].time) / 1000.0;
    // if (isRecording) {
    // const note = new Note({
    //   cID: timeEvent[input].cID,
    //   noteKey: noteKey,
    //   velocity: velocity,
    //   volume: volume,
    //   delay: delay,
    //   recordingID: currentRecording.id
    // });
    //   saveNote(note, timeEvent[input].index, beatIndex);
    // }
    APP.keyboardFlags[input] = null;
  }
}

document.body.addEventListener("keydown", e => {
  if (!APP.keyboardFlags[e.key]) {
    const note = new Note({
      cID: APP.currentInstrumentID,
      noteKey: APP.notesByKey[e.key],
      velocity: APP.currentVelocity,
      volume: APP.currentVolume,
      delay: null,
      recordingID: null
    });
    inputNoteOn(note, e.key);
  }
});

document.body.addEventListener("keyup", e => {
  inputNoteOff(APP.notesByKey[e.key], e.key);
});
