import PropTypes from 'prop-types';
import './CourseCell.css'
import Course from './Course';

const CourseCell = ({ CoursesOfHour}) => {
  return (
    <td  >
      {CoursesOfHour.map((thecourse) => (
     <Course  key={thecourse.course} CourseObject={thecourse}  / >
      ))}
    </td>
  );
};

CourseCell.propTypes = {
  CoursesOfHour: PropTypes.array,
};

export default CourseCell;
