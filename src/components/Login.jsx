import { Navbar } from "./Navbar"
import { useState } from "react"
import { supabase } from "../supabase/client"
import { useNavigate } from "react-router-dom"

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if(error) throw new Error('Tonto',error)
    console.log(data)
  }
  supabase.auth.onAuthStateChange((event, session) => {
    if(event === 'SIGNED_IN'){
        navigate('/')
    }
  })

  return (
    <div className="flex flex-col items-center">
    <Navbar />
    <section className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-[60%] h-[80%] flex flex-col justify-center items-center">
            <h1 className="text-3xl">Get Started Now</h1>
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-20 rounded-xl p-10 h-full w-[30rem]">
                <div>
                    <label htmlFor="">Name</label><br />
                    <input onChange={e => e.target.value} className="border border-gray-400 rounded-xl w-full p-1" type="text" placeholder="Enter your name" />
                </div>
                <div>
                    <label htmlFor="">Email address</label><br />
                    <input onChange={e => setEmail(e.target.value)} value={email} className="border border-gray-400 rounded-xl w-full p-1" type="text" placeholder="Enter your email" />
                </div>
                <div>
                    <label htmlFor="">Password</label><br />
                    <input onChange={e => setPassword(e.target.value)} value={password} className="border border-gray-400 rounded-xl w-full p-1" type="text" placeholder="*******" />
                </div>
                <button className="w-full bg-blue-300 p-2 rounded-lg" type="submit">Sign up</button>
            </form>
        </div>
    </section>
    </div>
  )
}
