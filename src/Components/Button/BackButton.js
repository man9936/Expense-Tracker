import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from "./BackButton.module.css"

const BackButton = () => {
   const history= useHistory()
  return (
    <div className={classes.navigation}>
         <a onClick={()=>{history.replace('/expense') }}>Back</a>
        
    </div>
  )
}

export default BackButton