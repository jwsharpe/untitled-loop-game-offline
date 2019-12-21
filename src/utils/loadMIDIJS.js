APP.instrumentsName = [
  "acoustic_grand_piano",
  "acoustic_guitar_nylon",
  "acoustic_bass",
  "electric_bass_pick",
  "electric_piano_2",
  "violin",
  "tuba",
  "clarinet",
  "percussive_organ",
  "orchestral_harp",
  "ocarina",
  "music_box",
  "lead_1_square",
  "lead_2_sawtooth",
  "synth_bass_1",
  "synth_drum"
];

MIDI.loadPlugin({
  soundfontUrl: "../public/fatboy/",
  instruments: APP.instrumentsName,
  onsuccess: function() {
    for (let i = 0; i < APP.instrumentsName.length; i++) {
      MIDI.programChange(i, MIDI.GM.byName[APP.instrumentsName[i]].number);
    }
    const loading = document.querySelector(".loading");
    loading.remove();
    console.log("loaded");
  }
});
