import { useState } from 'react'

import './App.css'
import QRGenerator from './components/QRGenerator/QRGenerator'
import GymExerciseTable from './components/GymExerciseTable/GymExerciseTable'
import DarkMode from './components/DarkMode/DarkMode'


function App() {
  

  return (
    <div className="App">
   <DarkMode/>
     <QRGenerator/>
    
    <GymExerciseTable/>
    </div>
  )
}

export default App
