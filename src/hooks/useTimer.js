import { useState, useRef } from "react";
let flat = true;

function timerFormat(timer) {
  let seconds = Math.floor(timer / 60).toString();
  let minutes = (timer - Math.floor(timer / 60) * 60).toString();
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  return { seconds, minutes };
}

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState);
  const [isActived, setIsActived] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setIsActived((x) => !x);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsActived((x) => !x);
  };

  const switchPausePlay = () => {
    if (flat) handleStart();
    else handlePause();
    flat = !flat;
  };

  return {
    seconds: timerFormat(timer).seconds,
    minutes: timerFormat(timer).minutes,
    switchPausePlay,
    isActived,
  };
};

export default useTimer;
