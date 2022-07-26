import React, { useEffect, useState } from "react";
import "./clock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faStop } from "@fortawesome/free-solid-svg-icons";

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

  const resetter = () => {
    if (!play) {
      setTimer(0);
    } else {
      alert("Please stop clock before resetting");
    }
  };

  return (
    <div className="container">
      <div className="title">Stop Watch</div>
      <div className="hourContainer">
        <div className="ticTock">
          <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}</span>
          <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
          <span>{("0" + ((timer / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <div className="playPause">
            {!play && (
              <FontAwesomeIcon
                onClick={() => setPlay(true)}
                icon={faPlay}
              ></FontAwesomeIcon>
            )}
            {play && (
              <FontAwesomeIcon
                onClick={() => setPlay(false)}
                icon={faPause}
              ></FontAwesomeIcon>
            )}
          </div>
          <div className="resetBtn">
            <FontAwesomeIcon onClick={resetter} icon={faStop}></FontAwesomeIcon>
          </div>
        </div>
        {/* <FontAwesomeIcon icon="fa-solid fa-play" /> */}
      </div>
    </div>
  );
}

export default Clock;
