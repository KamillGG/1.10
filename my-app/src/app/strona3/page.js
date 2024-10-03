"use client"
import { useState } from "react"
export default function Strona(){
    const [color,setColor] = useState('white')
    const changeColor = ()=>{
        setColor(color=='white'? "green":"white")
    }
    return(
        <div className={`h-screen flex items-center justify-center ${color=='white' ? "bg-white":"bg-green-400"}`}>
        <button onClick={changeColor} className="border border-black border-solid">Zmien kolor</button>
        </div>
    )
}