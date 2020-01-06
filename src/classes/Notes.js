class Note {
  all = [];

  constructor(note) {
    this.cID = note.cID;
    this.noteKey = note.noteKey;
    this.velocity = note.velocity;
    this.volume = note.volume;
    this.delay = note.delay;
    this.recordingID = note.recordingID;

    Note.all.push(this);
  }
}
