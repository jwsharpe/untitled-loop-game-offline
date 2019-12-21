function inputNoteOn(note, input) {
  const { cID, volume, noteKey, velocity } = note;
  if (!APP.keyboardFlags[input]) {
    APP.keyboardFlags[input] = {
      time: Date.now(),
      cID: cID
    };
    MIDI.setVolume(cID, volume);
    MIDI.noteOn(cID, noteKey, velocity, 0);
  }
}

function inputNoteOff(noteKey, input, velocity = APP.currentVelocity) {
  if (APP.keyboardFlags[input]) {
    MIDI.noteOff(APP.keyboardFlags[input].cID, noteKey, 0);
    // delay = (Date.now() - APP.keyboardFlags[input].time) / 1000.0;
    // if (isRecording) {
    //   const note = createNote(
    //     timeEvent[input].cID,
    //     noteKey,
    //     velocity,
    //     volume,
    //     delay,
    //     currentRecording.id
    //   );
    //   saveNote(note, timeEvent[input].index, beatIndex);
    // }
    APP.keyboardFlags[input] = null;
  }
}

document.body.addEventListener("keydown", e => {
  if (APP.notesByKey[e.key]) {
    const note = createNote(
      APP.currentInstrumentID,
      APP.notesByKey[e.key],
      APP.currentVelocity,
      APP.currentVolume,
      null,
      null
    );
    inputNoteOn(note, e.key);
  }
});

document.body.addEventListener("keyup", e => {
  if (APP.notesByKey[e.key]) {
    inputNoteOff(APP.notesByKey[e.key], e.key);
  }
});
