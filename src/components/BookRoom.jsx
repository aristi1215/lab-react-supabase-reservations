import { FaUser } from "react-icons/fa";
import { useReservationsContext } from "../context/ReservationContext";

export const BookRoom = () => {
    const {reservation, setReservation, handleReservation} = useReservationsContext()
    const {showCalendar} = reservation
    
  return (
    <section className="h-[13rem] rounded-lg w-[80%] bg-blue-300 mx-auto my-10 text-center flex items-center flex-col  gap-10 p-2">
        <div>
        <h2 className="text-3xl font-semibold">Book a room</h2>
        <span>Discover the perfect space for you</span>
        </div>
        <div className="flex w-[70%] items-center justify-center gap-10 text-start">
            <div>
                <small>Date</small>
                <div className="h-[2rem] bg-white rounded-xl flex items-center p-3 gap-2 cursor-pointer" onClick={() => setReservation({...reservation, showCalendar: !showCalendar})}>
                    <FaUser />
                    <span>Check Available</span>
                </div>
            </div>
            <button onClick={handleReservation} className=" bg-blue-500 rounded-xl p-3 mt-3">Book Now</button>
        </div>

    </section>
  )
}
