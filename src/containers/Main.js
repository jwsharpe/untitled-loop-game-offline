import React from "react";
import Instruments from "../components/main/Instruments";
import Sidebar from "../components/main/Sidebar";
import Looper from "../components/main/Looper";
import Controls from "../components/main/Controls";

export default function Main() {
  const _functionButton = () => {
    const Soundfont = require("soundfont-player");
    Soundfont.instrument(new AudioContext(), "acoustic_grand_piano").then(
      function(piano) {
        piano.play("C4");
      }
    );
  };
  return (
    <div className="main">
      <Instruments />
      <Sidebar />
      <Looper />
      <Controls />
      <button onClick={_functionButton} title="play" />
    </div>
  );
}
