import React, { useEffect, useState } from "react";
import "./clock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

// let watcher = ;

function Clock() {
  const [timer, setTimer] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    let interval = null;
    if (play) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [play]);

  return (
    <div className="container">
      <div className="hourContainer">
        <div className="ticTock">
          <span>{(timer / 10) % 100}</span>
        </div>
        <div className="buttons">
          <FontAwesomeIcon
            onClick={() => setPlay(true)}
            icon={faPlay}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            onClick={() => setPlay(false)}
            icon={faPause}
          ></FontAwesomeIcon>
        </div>
        {/* <FontAwesomeIcon icon="fa-solid fa-play" /> */}
      </div>
    </div>
  );
}

export default Clock;
