import dayjs from "dayjs";
import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContextProvider";
import { supabase } from "../supabase/client";

export const reservationContext = createContext()

export const useReservationsContext = () => useContext(reservationContext)

export const ReservationContextProvider = ({children}) => {
    const [reservation, setReservation] = useState({
        selectedDate: dayjs(),
        showCalendar: false
    })
    const {user, session} = useAuthContext()

    const handleReservation = async () => {
        if(!session || !user){
            console.log('You must log in')
        }

        const {data, error} = await supabase.from('reservations').insert({
            user_id: user.id,
            payed: false,
            date: reservation.selectedDate,
        }).select()

        if(error) throw new Error(error)

        console.log('Successfuly booked on: '+ data[0].date)

        return data
    }

  return (
    <reservationContext.Provider value={{reservation, setReservation, handleReservation}}>
        {children}
    </reservationContext.Provider>
  )
}
