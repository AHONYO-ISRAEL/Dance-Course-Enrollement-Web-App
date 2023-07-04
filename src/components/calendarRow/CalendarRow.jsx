import PropTypes from 'prop-types';
import CourseCell from '../courseCell/CourseCell';
import './CalendarRow.css';

const CalendarRow = ({ hour, days, courses }) => {
  return (
    <tr className='calendarrow'>
      <th className='hour' >{hour.hour}</th>
      {days.map((day) => {
        const accurateCourse = courses.filter(
          (course) => course.dayId === day.id && course.HourId === hour.id
        );
        return <CourseCell CoursesOfHour={accurateCourse} key={String(day.id)+ String(hour.id)}   />
      })}
    </tr>
  );
};

CalendarRow.propTypes = {
  hour: PropTypes.object,
  days: PropTypes.array,
  courses: PropTypes.array,
};

export default CalendarRow;
