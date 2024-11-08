import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './components/home/Home'
import Annaly from './components/annaly/annaly'



function App() {
 
  useEffect(() => {
    
    Aos.init()
    
  }, [])
  

  return (
    <>
      <Home/>
      <Annaly/>
    </>
  )
}

export default App
