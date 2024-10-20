import { supabase } from "../supabase/client"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const useAuthContext = () => {
      const authContext = useContext(AuthContext)
      if(!authContext) throw new Error('An auth context must be provided')
      return authContext
    }

export const AuthContextProvider = ({children}) => {

  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(supabase)
    setLoading(true)
    const setUserAuth = async () => {
      const {data, error} = await supabase.auth.getSession()
      if(error){
        setLoading(false)
        throw new Error('Error retrieving the session')
        }
      setSession(data?.session)
      setUser(data?.session?.user)
      setLoading(false)
    }

    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)
      setUser(session?.user)
      setLoading(false)
    })

    setUserAuth()

  },[])
  
  return (
    <AuthContext.Provider value={{session, user}}>
        {children}    
    </AuthContext.Provider>
  )
}
