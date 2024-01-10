import React from 'react'
import Clock from '../../components/Clock/Clock'
import Map from '../../components/Map/Map'

import BasicModal from '../../components/Modal/BasicModal'
import "./HomePage.css"


const HomePage = () => {

  
  return (
    <div className='home-container'>
      <p>☣☣ If you want to see admin functionalities, user: carlosadmin@gmail.com pw: 12345 ☣☣ </p>
      <p>☣☣ Demo user, user: carlos@gmail.com pw: 12345 ☣☣ </p>
    <BasicModal/>
    Click to know more about us 
      <Clock/>
      <Map/>
      
  
      </div>
  )
}

export default HomePage