import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      HI REDUX <Link to="/game">About</Link>
    </div>
  );
};

export default Welcome;
