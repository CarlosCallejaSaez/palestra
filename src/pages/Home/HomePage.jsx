import React from 'react'
import Clock from '../../components/Clock/Clock'
import Map from '../../components/Map/Map'

import BasicModal from '../../components/Modal/BasicModal'
import "./HomePage.css"


const HomePage = () => {

  
  return (
    <div className='home-container'>
      
     <BasicModal/>
      <Clock/>
      <Map/>
      
  
      </div>
  )
}

export default HomePage