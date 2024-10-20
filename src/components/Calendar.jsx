import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useReservationsContext } from '../context/ReservationContext';

export default function DateCalendarValue() {
  const {reservation: {selectedDate, showCalendar}, reservation, setReservation} = useReservationsContext()

  return (
    <div className={`bg-blue-200 justify-center h-fit w-fit rounded-xl ${showCalendar ? 'flex' : 'hidden'}`}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={selectedDate} onChange={(newValue) => setReservation({...reservation, selectedDate: newValue})} />
    </LocalizationProvider>
    </div>
  );
}