import PropTypes from 'prop-types';
import { useContext } from 'react';
import { EnrollementListContext } from '../../providers/EnrollementListProvider';

const Course = ({CourseObject}) => {

    const courseclassname = String(CourseObject.HourId )  +String(CourseObject.dayId)
    const {enrolled, setEnrolled} = useContext(EnrollementListContext)


let HandleEnrollement = (e) =>{
    const CurrentElementClassName = e.target.className
    const ElementHourId=   parseInt( CurrentElementClassName.slice(0,1))
    const ElementDayId=  parseInt(CurrentElementClassName.slice(-1))
  const Search  = enrolled.find((course)=> course.HourId  === ElementHourId  && course.dayId === ElementDayId)
  if(Search === undefined){
    let tempi ={}
    tempi = {
        id: CourseObject.id,
        HourId: CourseObject.HourId,
        dayId: CourseObject.dayId,
        course: CourseObject.course,
        price: CourseObject.price,
    }
    setEnrolled((previousenrolled) => [...previousenrolled, tempi]);
    localStorage.setItem('enrollement', JSON.stringify(enrolled))

  }
  else{
    if(e.target.id !== Search.id)
{setEnrolled( enrolled.filter((x)=> x.HourId !== Search.HourId || x.dayId !== Search.dayId))
let tempi={}
tempi = {
    id: CourseObject.id,
    HourId: CourseObject.HourId,
    dayId: CourseObject.dayId,
    course: CourseObject.course,
    price: CourseObject.price,
}
setEnrolled((previousenrolled) => [...previousenrolled, tempi]);
localStorage.setItem('enrollement', JSON.stringify(enrolled))}
else{
    setEnrolled(enrolled.filter((x)=> x.id  !== Search.id))
}

  }
}
    let backgroundColor = enrolled.find((x) => x.id === CourseObject.id)
      ? "#088178" // Color when enrolled
      : ""; 
  return (

        <p   className={courseclassname} 
        id={CourseObject.id}
        onMouseEnter={(e) => (e.target.innerHTML = CourseObject.price + " $")}
        onMouseLeave={(e) => (e.target.innerHTML = CourseObject.course)}
        onClick={HandleEnrollement}
        style={{backgroundColor}
    
    }
        >{CourseObject.course}</p>
    
  )
}

Course.propTypes={
    CourseObject:PropTypes.object,
}

export default Course
