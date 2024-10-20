import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="flex justify-center bg-[url('hero.svg')] bg-cover bg-center h-[35rem]">
        <nav className="bg-gray-200 rounded-xl w-[80%] h-[3rem] mt-4 flex justify-around items-center gap-10">
            <a href="">Home</a>
            <a href="">About</a>
            <img src="hero.svg" width={50} height={50} className="rounded-full" alt="" />
            <a href="">Newsletter</a>
            <Link to={'/login'} className="text-blue-700" href="">Login</Link>
        </nav>
    </header>
  )
}
