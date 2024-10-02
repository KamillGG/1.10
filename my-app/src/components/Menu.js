import Link from "next/link";

export default function Menu(){
    return(
        <div className="flex flex-col gap-2">
            <Link href='/'>Strona glowna</Link>
            <Link href='/strona1'>Strona1</Link>
            <Link href='/strona2'>Strona2</Link>
        </div>
    )
}