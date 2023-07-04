import CalendarHeader from "../calendarHeader/CalendarHeader"
import CalendarRow from "../calendarRow/CalendarRow"
import './Calendar.css'

const Calendar = () => {

    const days = [
        {
            id: 1,
            day:   'Lundi', 
        },
        {
            id: 2,
            day:   'Mardi',
        },
        {
            id: 3,
            day:   'Mercredi',
        },
        {
            id: 4,
            day:   'Jeudi',
        },
        {
            id: 5,
            day:   'Vendredi',
        },
        {
            id: 6,
            day: 'Samedi',
        },
        {
            id: 7,
            day:   'Dimanche',
        },
    
    ]

    const Hours = [
        {
            id:1,
            hour: '18:10',
        },
    {
        id:2,
        hour: '19:15'
    },
    {
        id: 3,
        hour:'20:25'
    }
    ]
    
    const  courses =[
     {
        dayId:2,
        HourId:3,
        id:'UrbanKizMardi3',
        course:'Urban kiz',
        price:100,
     },
     {
        dayId:2,
        HourId:3,
        id:'Salsa3Mardi3',
        course:'Salsa3',
        price:45,
     },
     {
        dayId:3,
        HourId:3,
        id:'Rueda3Mercredi3',
        course:'Rueda3',
        price:75,
     },
         {
            dayId:2,
            HourId:1,
            id: 'KizMardi1',
            course: 'Kiz',
            price: 30,
         },
         {
            dayId:2,
            HourId:1,
            id:'Salsa4Mardi1' ,
            course: 'Salsa4',
            price: 15,
         },
         {
            dayId:3,
            HourId:1,
            id: 'Bachata1Mercredi1',
            course: 'Bachata1',
            price: 50,
         },
         {
            dayId:3,
            HourId:1,
            id: 'Rueda1Mercredi1',
            course: 'Rueda1',
            price: 30,
         },
         {
            dayId:3,
            HourId:1,
            id: 'Rueda2Mercredi1',
            course: 'Rueda2',
            price: 30,
         },
         {
            dayId: 2,
            HourId:1,
            id: 'SalsaMardi1',
            course: 'Salsa',
            price: 15,
        },
    
         {
            dayId:4,
            HourId:1,
            id: 'Rueda2Jeudi1',
            course: 'Rueda2',
            price: 35,
         },
         {
            dayId:4,
            HourId:1,
            id: 'Bachata3Jeudi1',
            course: 'Bachata3',
            price: 40,
         },
         {
            dayId:7,
            HourId:1,
            id: 'Salsa1Dimanche1',
            course: 'Salsa1 ',
            price: 15,
         },
         {
            dayId:4,
            HourId:1,
            id: 'Salsa1Jeudi1',
            course: 'Salsa1',
            price: 20,
         },
         {
            dayId:7,
            HourId:1,
            id: 'Salsa2Dimanche1',
            course: 'Salsa2',
            price: 30,
         },
         {
            dayId:2,
            HourId:2,
            id: 'Kiz2Mardi2',
                course: 'Kiz2',
               price: 20,
         },
         {
            dayId:2,
            HourId:2,
            d: 'Rueda3Mardi2',
            course: 'Rueda3',
            price: 15,
         },
         {
            dayId:2,
            HourId:2,
            id: 'Salsa4Mardi2',
            course: 'Salsa4',
            price: 50,
         },
         {
            dayId:3,
            HourId:2,
            id: 'Bachata2Mercredi2',
            course: 'Bachata2',
            price: 50,
         },
         {
            dayId:3,
            HourId:2,
            id: 'Salsa3Mercredi2',
            course: 'Salsa3',
            price: 40,
         },
         {
            dayId:3,
            HourId:2,
            id: 'Salsa4Mercredi2',
            course: 'Salsa4',
            price: 10,
         },
         {
            dayId:4,
            HourId:2,
            id: 'Salsa2Jeudi2',
            course: 'Salsa2',
            price: 65,
         },
         {
            dayId:7,
            HourId:2,
            id: 'Bachata1Dimanche2',
            course: 'Bachata1',
            price: 45,
        },
        {
            dayId:7,
            HourId:2,
            id: 'Rueda1Dimanche2',
            course: '    Rueda1',
            price: 20,
        }
    ]

  return (
    <table className="calendar" border={'1px #088178' } >
      <thead><CalendarHeader headerData={days}  /></thead>
      <tbody>
        {
            Hours.map(hour=>  <CalendarRow   key={hour.id}   hour={hour}  days={days}  courses={courses}   /> )
        }
      </tbody>
    </table>
  )
}

export default Calendar
