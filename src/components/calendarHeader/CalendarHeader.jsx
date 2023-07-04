import PropTypes from 'prop-types';
import './CalendarHeader.css'

const CalendarHeader = ({headerData}) => {
  return (

    <tr className='calendarheader' >
        <th>Horaire</th>
      {headerData
      .map(day=>  <th key={day.id}> {day.day} </th> ) }
    </tr>
  )
}

CalendarHeader.propTypes  ={
    headerData: PropTypes.array
}

export default CalendarHeader
