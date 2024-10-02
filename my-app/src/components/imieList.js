export default function ImieList({imie,ok}){
    return(
        <div className={ok ? "border border-black border-solid w-[200px] text-center bg-green-500":"border border-black border-solid w-[200px] text-center"}>
          <p>{imie}</p>
        </div>
      )
}