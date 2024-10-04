import Image from "next/image"
export default function Country({lista}){
    return(
        <div className="border">
            <Image src={lista.flags.png} width={200} height={100} alt={lista.name.common}/>
            <h1>{lista.name.common}</h1>
        </div>
    )
}