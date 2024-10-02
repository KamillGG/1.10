export default function GamesList({lista}){
    return(
        <ol className="list-decimal">
            {lista.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ol>
    )
}