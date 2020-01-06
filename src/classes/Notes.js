class Note {
  constructor(note) {
    this.cID = note.cID;
    this.noteKey = note.noteKey;
    this.velocity = note.velocity;
    this.volume = note.volume;
    this.delay = note.delay;
    this.recordingID = note.recordingID;
    this.beatIndex = note.beatIndex;
  }

  save = () => {
    if (Note.all) {
      Note.all.push(this);
    } else {
      Note.all = [this];
    }
  };
}
