"use client"
import { useState } from "react"
export default function Strona(){
    const [input,setInput] = useState([])
    const [arr,setArr] = useState([])
    const addList = () =>{
        setArr([...arr,input])
        setInput('')
    }
    return(
        <div className="flex items-center justify-center h-screen flex-col">
            <>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className="border"/>
        <button onClick={addList}>add to the list</button>
        </>
        <ul className="list-disc">
            {arr.map((item, idx)=>(
                <li key={idx}>{item}</li>
            ))}
        </ul>
        </div>
    )
}