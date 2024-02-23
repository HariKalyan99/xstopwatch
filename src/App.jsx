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
    <div style={{height: "200px", width: "200px", border: "5px solid black", display: "flex", flexDirection: "column", padding: "20px", justifyContent: 'center', alignItems: "center", rowGap: "10px", backgroundColor: "pink", borderRadius: "10px"}}>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={handleStartStop}>{isRunning ? "stop" : "start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default App;
