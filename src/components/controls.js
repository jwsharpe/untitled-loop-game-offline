const CONTROLS = {
  controls: document.querySelector("#controls"),
  undoBtn: controls.querySelector("#undo-btn"),
  updateFormElement: document.querySelector("#update-form"),
  volumeKnob: document.querySelector("#volume"),
  volumeSlider: document.querySelector("#volume-slider"),
  velocityKnob: document.querySelector("#velocity"),
  velocitySlider: document.querySelector("#velocity-slider"),
  metro: document.querySelector("#metro"),
  octave: document.querySelector("#octave")
};

CONTROLS.volumeSlider.value = APP.currentVolume;
CONTROLS.velocitySlider.value = APP.currentVelocity;

const startRecording = () => {
  APP.isRecording = true;
  CONTROLS.undoBtn.disabled = true;
  // currentRecording = new Recording();
  // postRecording(currentRecording);
};

const endRecording = () => {
  CONTROLS.undoBtn.disabled = false;
  APP.isRecording = false;
};

const undoLastRecording = () => {
  // deleteRecording();
};

CONTROLS.metro.addEventListener("click", e => {
  APP.isMetronome = !APP.isMetronome;
  if (APP.isMetronome) {
    e.target.style = "opacity: 1; background: red";
  } else {
    e.target.style = "";
  }
});

const updateForm = () => {
  CONTROLS.updateFormElement.BPM.value = APP.currentLoop.BPM;
  CONTROLS.updateFormElement.name.value = APP.currentLoop.name;
  CONTROLS.updateFormElement.bars.value = APP.currentLoop.bars;
};

CONTROLS.controls.addEventListener("click", e => {
  if (e.target.id === "record-btn") {
    if (APP.isRecording) {
      e.target.style = "";
      endRecording();
    } else {
      e.target.style = "opacity: 1; background: red";
      startRecording();
    }
  }
  if (e.target.id === "undo-btn") undoLastRecording();
});

CONTROLS.updateFormElement.addEventListener("submit", e => {
  e.preventDefault();

  const contentBody = {
    name: CONTROLS.updateFormElement.name.value,
    BPM: CONTROLS.updateFormElement.BPM.value,
    bars: CONTROLS.updateFormElement.bars.value
  };
  //   const content = {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify(contentBody)
  //   };
  //   fetch(LOOP_URL(currentLoop.id), content)
  //     .then(e => e.json())
  //     .then(e => {
  //       currentLoop.BPM = e.BPM;
  //       currentLoop.bars = e.bars;
  //       currentLoop.updateNotesLength();
  //       beatIndex = 0;
  //       startLooper();
  //     });
});

CONTROLS.controls.addEventListener("mousewheel", e => {
  if (
    e.target.closest("div").id === "volume-div" ||
    e.target.closest("div").id === "volslide"
  ) {
    APP.currentVolume += parseInt(e.deltaY);
    if (APP.currentVolume > 512) {
      APP.currentVolume = 512;
    }
    if (APP.currentVolume < 0) {
      APP.currentVolume = 0;
    }
    CONTROLS.volumeKnob.innerText = parseInt((APP.currentVolume * 100) / 512);
    CONTROLS.volumeSlider.value = APP.currentVolume;
  }

  if (
    e.target.closest("div").id === "velocity-div" ||
    e.target.closest("div").id === "velslide"
  ) {
    APP.currentVelocity += parseInt(e.deltaY);
    if (APP.currentVelocity > 64) {
      APP.currentVelocity = 64;
    }
    if (APP.currentVelocity < 0) {
      APP.currentVelocity = 0;
    }
    CONTROLS.velocityKnob.innerText = parseInt(
      (APP.currentVelocity * 100) / 127
    );
    CONTROLS.velocitySlider.value = APP.currentVelocity;
  }
});

CONTROLS.volumeSlider.oninput = function() {
  APP.currentVolume = +this.value;
  CONTROLS.volumeKnob.innerText = parseInt((APP.currentVolume * 100) / 512);
};
CONTROLS.velocitySlider.oninput = function() {
  APP.currentVelocity = +this.value;
  CONTROLS.velocityKnob.innerText = parseInt((APP.currentVelocity * 100) / 127);
};

const octaveUp = () => {
  if (APP.currentOctave < 3) {
    APP.currentOctave++;
    for (const note in APP.notesByKey) {
      APP.notesByKey[note] += 12;
    }
    CONTROLS.octave.innerText = APP.currentOctave;
  }
};

const octaveDown = () => {
  if (APP.currentOctave > -1) {
    APP.currentOctave--;
    for (const note in APP.notesByKey) {
      APP.notesByKey[note] -= 12;
    }
    CONTROLS.octave.innerText = APP.currentOctave;
  }
};

document.body.addEventListener("keydown", e => {
  //   if (!typingElements.includes(document.activeElement)) {
  ///Change Octave//
  if (e.key === "Shift") {
    octaveUp();
  }

  if (e.key === "Control") {
    octaveDown();
  }
  //   }
});
