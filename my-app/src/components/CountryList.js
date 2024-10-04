import Image from "next/image";
export default function Country({country}){
    return(
        <div className="border-2 border-gray-700 p-2 flex flex-col items-center">
            <div className="w-[200px] h-[100px] relative ">
            <Image src={country.flags.png} layout="fill" objectFit="contain" className="border border-gray-700"/>
            </div>
        <h1 className="text-center font-semibold">{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        </div>
    )
}