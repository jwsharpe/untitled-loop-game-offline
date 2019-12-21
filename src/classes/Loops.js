class Loop {
  constructor(loop) {
    this.id = loop.id;
    this.name = loop.name;

    this.beatsPerBar = 96;
    this.bars = loop.bars;
    this.BPM = loop.BPM;

    this.notes = [];
    this.notes.length = loop.beatsPerBar * loop.bars;

    loop.notes.forEach(e => {
      if (this.notes[e.beatIndex]) {
        this.notes[e.beatIndex].push(e);
      } else {
        this.notes[e.beatIndex] = [e];
      }
    });

    Loop.all.push(this);
  }
}
