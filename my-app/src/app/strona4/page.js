"use client"
import { useState } from "react"
export default function Strona(){
    const [text,setText] = useState('')
    const [submited,setSubmited] = useState('change text')
    const changeText = ()=>{
        setText('')
        setSubmited(text)
    }
    return(
        <div>
            <h1>{submited}</h1>
            <input className="border" type="text" onChange={(event)=>setText(event.target.value)} value={text}/>
            <button onClick={changeText}>Submit</button>
        </div>
    )
}