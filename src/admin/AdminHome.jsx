import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import { supabase } from "../supabase/client"
import { useNavigate } from "react-router-dom"

export const AdminHome = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();  // Espera a que se resuelva la promesa
      return data;
    };

    const verifyUser = async () => {
      const {user} = await checkUser();  // Espera el resultado de checkUser

      console.log(user);  // Ya puedes usar el usuario de manera síncrona

      if (!user || (user.user_metadata.role !== 'superAdmin')) {
        navigate('/admin/login');
      }
    };

    verifyUser();  // Llamar la función que maneja el flujo asíncrono
  }, [navigate])
  



  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    })
    if(error) throw new Error(error)
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center">
    <Navbar />
    <section className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-[60%] h-[80%] flex flex-col justify-center items-center">
            <h1 className="text-3xl">Panel de administrador</h1>
            <h2>Crear un usuaria</h2>
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-20 rounded-xl p-10 h-full w-[30rem]">
                <div>
                    <label htmlFor="">Name</label><br />
                    <input onChange={e => setName(e.target.value)} value={name} className="border border-gray-400 rounded-xl w-full p-1" type="text" placeholder="Enter your name" />
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
