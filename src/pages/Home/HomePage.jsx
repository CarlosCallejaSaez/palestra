import React from 'react'
import Clock from '../../components/Clock/Clock'
import Map from '../../components/Map/Map'
import Timer from '../../components/Timer/Timer'
import BasicModal from '../../components/Modal/BasicModal'
import { ContactUs } from '../../components/ContactUs/ContactUs'

const HomePage = () => {

  
  return (
    <div>
      
     <BasicModal/>
      <Clock/>
      <Map/>
      <Timer/>
      <ContactUs/>
      </div>
  )
}

export default HomePage