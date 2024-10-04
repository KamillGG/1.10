"use client"
import { useEffect,useState } from "react"
import Country from "@/components/CountryList"
export default function Strona(){
    const [data, setData] = useState(null)
    useEffect(()=>{
        const getData = async ()=>{
            try{
                const response = await fetch(`https://restcountries.com/v3.1/all`)
                const jsonData = await response.json()
                setData(jsonData)
                console.log(jsonData)
            }catch(error){
                console.log(error)
            } finally{
                
            }
        }
        getData()
    },[])
    return(
        <div className="flex flex-wrap gap-2 h-screen justify-center items-center">
            {data && data.map((item, idx)=>(
                <Country lista={item} key={idx}/>
            ))}
        </div>
    )
}