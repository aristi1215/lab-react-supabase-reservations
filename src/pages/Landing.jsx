import { Header } from "../components/Header"
import { BookRoom } from "../components/BookRoom"
import BookCalendar from '../components/Calendar'

export const Landing = () => {

  return (
    <div className="max-h-screen ">
        <Header/>
        <main>
            <BookRoom />
            <BookCalendar />
        </main>
    </div>
  )
}
