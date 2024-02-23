import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);


  useEffect(() => {
    let intervalId;
    if(isRunning){
      intervalId = setInterval(() => {
        setElapsedTime((previousElapsedTime) => previousElapsedTime + 1)
      }, 1000);
    }else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    }
  })

  const formatTime = (time) => {
    const min = Math.floor(time/60);
    const secs = time%60;
    return `${min}:${secs < 10 ? '0' : ""}${secs}`;
  }

  const handleStartStop = () => {
    setIsRunning(!isRunning)
  }

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  }

  return (
    <>
    <div >
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default App;
