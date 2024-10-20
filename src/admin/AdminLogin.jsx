import { useState } from "react"
import { supabase } from "../supabase/client"
import { useNavigate } from "react-router-dom"
import {Navbar} from '../components/Navbar'

export const AdminLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if(data?.user?.user_metadata?.role === 'superAdmin' || data?.user?.user_metadata?.role === 'Admin'){
      console.log('hola')
      navigate('/admin/home')
    }
    console.log('chao')

    if(error) throw new Error('Tonto',error)
  }

  return (
    <div className="flex flex-col items-center">
    <Navbar />
    <section className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-[60%] h-[80%] flex flex-col justify-center items-center">
            <h1 className="text-3xl">Admin panel login</h1>
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