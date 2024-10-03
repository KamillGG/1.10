"use client"
import { useState } from "react"
export default function Strona(){
    const [input,setInput] = useState('')
    const [bg,setBg] = useState('')
    const SetBackground = ()=>{
        setBg(input)
    }
    return(
        <div className={bg}>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={SetBackground}>Set Bg</button>
        </div>
    )
}