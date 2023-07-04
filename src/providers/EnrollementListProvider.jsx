import { createContext, useState } from "react"
import PropTypes from 'prop-types';
export const EnrollementListContext = createContext()
const EnrollementListProvider = ({children}) => {

    const [enrolled, setEnrolled] = useState(JSON.parse(localStorage.getItem('enrollement')) || [])
  return (
<EnrollementListContext.Provider value={{enrolled,   setEnrolled}}>
    {children}
</EnrollementListContext.Provider>
  )
}

EnrollementListProvider.propTypes = {
    children: PropTypes.node,
}

export default EnrollementListProvider
