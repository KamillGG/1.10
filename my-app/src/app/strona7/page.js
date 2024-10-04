"use client"
import Country from "@/components/CountryList"
import { useEffect, useState } from "react"
export default function Strona(){
    const [count,setCount] = useState(null)
    useEffect(()=>{
        const getData = async ()=>{
            try{
                const response = await fetch(`https://restcountries.com/v3.1/all`)
                const dataJson = await response.json()
                setCount(dataJson)
            }catch(error){
                console.log(error)
            }
        }
        getData()
    },[])
    return(
        <div className="flex flex-wrap gap-2">
            {count && count.map((item,idx)=>(
            <Country key={idx} country={item}/>
        ))}</div>
    )
}