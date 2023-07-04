import PropTypes from 'prop-types';
const Button = ({color,text}) => {
  return (
<button style={{background: {color}}}>
{text}
</button>
  )
}

Button.propTypes ={
    color: PropTypes.string,
    text: PropTypes.string,
}



export default Button
