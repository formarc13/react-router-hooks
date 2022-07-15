import React, { useState, useEffect } from "react";

const Timer = () => {
    const [ hora, setHora ] = useState("");
  
    useEffect(() => {
        let intervalo = setInterval(() => {
            const fecha = new Date();
            setHora(fecha.toLocaleTimeString())
        }, 1000)
        return () => clearInterval(intervalo)
    }, [])
    
    return (
        <div>
            <h1>Timer</h1>
            <p>{hora}</p>
        </div>
    )
}

export default Timer;