function createNote(cID, noteKey, velocity, volume, delay, recordingID) {
  return {
    cID: cID,
    noteKey: noteKey,
    velocity: velocity,
    volume: volume,
    delay: delay,
    recordingID: recordingID
  };
}
