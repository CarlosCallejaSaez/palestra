import React from 'react'
import Clock from '../../components/Clock/Clock'
import Map from '../../components/Map/Map'
import Timer from '../../components/Timer/Timer'
import BasicModal from '../../components/Modal/BasicModal'

const HomePage = () => {

  
  return (
    <div>
      HomePage
     <BasicModal/>
      <Clock/>
      <Map/>
      <Timer/>
      
      </div>
  )
}

export default HomePage