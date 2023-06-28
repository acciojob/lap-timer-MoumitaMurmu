import React,{useState,useEffect} from "react";

const LapTimer = () => {
    const[time,setTime] = useState(0)
    const[lap,setLap] = useState([])
    const[isRunning,setIsRunning] = useState(false)

    useEffect(()=>{
        let intervalid ;
if(isRunning)
{
        intervalid = setInterval(()=>{setTime((prevtime)=>prevtime+10)},10)
    }
    return () => clearInterval(intervalid)
    },[isRunning])
    
    const handleStart = () => {
        setIsRunning(true);
      };
    
    const handleStop = () => {
      setIsRunning(false)
    }
      const handleReset = () => {
        setIsRunning(false)
        setTime(0);
        setLap([]);
      };
    
      const handleLap = () => {
        setLap((prevLaps) => [...prevLaps, time]);
      };
    const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor(time % 1000);
    return(
    <>
    <div>
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}:
      {milliseconds.toString().padStart(2, "0").slice(0, 2)}
    </div>
    <button onClick={handleStart}> Start </button>
    <button onClick={handleStop}> Stop </button>
    <button onClick={handleLap}> Lap </button>
    <button onClick={handleReset}> Reset </button>
    
<ul>
{
lap.map((t)=>(<li>
{Math.floor(t/60000).toString().padStart(2, "0")}:
{Math.floor((t/1000)%60).toString().padStart(2, "0")}:
{ Math.floor(t % 1000).toString().slice(0, 2)}</li>))
}
</ul>
  </>
);
}

export default LapTimer ;
