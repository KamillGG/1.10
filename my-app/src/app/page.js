import GamesList from "@/components/GamesList";
import ImieList from "@/components/imieList";
export default function Home() {
  var arr =[
    {imie:"Kamil",ok:true} ,{imie:"Jan", ok:true}, {imie:"Stasiek",ok:true}, {imie:"zartosz",ok:false}
  ]
  var games = [
    'God of war', 'Elden ring', 'God of war Ragnarok'
  ]
  return(
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      {arr.map((item,index)=>(

      <ImieList key={index} imie={item.imie} ok={item.ok}/>
      ))}
      <GamesList lista={games}/>
    </div>
  )
}
