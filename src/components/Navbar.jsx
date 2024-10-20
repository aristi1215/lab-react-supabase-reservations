import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
         <nav className="bg-gray-200 rounded-xl w-full h-[3rem] mt-4 flex justify-around items-center gap-10">
            <Link href="/">Home</Link>
            <a href="">About</a>
            <img src="hero.svg" width={50} height={50} className="rounded-full" alt="" />
            <a href="">Newsletter</a>
            <Link to={'/login'} className="text-blue-700" href="">Login</Link>
        </nav>
    </div>
  )
}
