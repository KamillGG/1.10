"use client"
import { useState } from "react"
export default function Strona(){
    const [zmiana, setZmiana] = useState('start')
    const changeStart = ()=>{
        setZmiana(zmiana == "start" ? "stop": "start")
    }
    return(
        <>
        <h1>{zmiana}</h1>
        <button className="border border-black border-solid"onClick={changeStart}>Zmień</button>
        </>
    )
}