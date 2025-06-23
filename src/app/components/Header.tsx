import Link from "next/link"
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex justify-between h-full bg-gray-500 p-5 text-white items-center">
        <Link href={"/"}>Book Commerce</Link>
        <div className="flex items-center gap-6">
            <Link href={"/home"}>Home</Link>
            <Link href={"/login"}>Login</Link>
            <Link href={""}>
                <Image src={"/default_icon.png"} alt={"ユーザーアイコン"} width={50} height={50}/>
            </Link>
        </div>
    </header>
  )
}

export default Header
