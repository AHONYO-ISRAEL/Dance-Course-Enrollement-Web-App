import { useContext } from 'react';
import Button from '../Button';
import  './Header.css'
import { EnrollementListContext } from '../../providers/EnrollementListProvider';


const Header = () => {
const {enrolled} = useContext(EnrollementListContext)


let sum =  enrolled.map(course => course.price)
.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2)  

const  session = 'DECEMBRE 2022'
const period = '04 dec. 2022 - 14 janv. 2023'



  return (
    <div className='header'>
        <h1> SESSION   {session}</h1>
        <h1> {period} </h1>
      <div className="enroll-button">
      <Button color={'blue'} text={"S'inscrire"} />
    <button className='sum'> {sum} $ </button>
      </div>

      
    </div>
  )
}




export default Header
