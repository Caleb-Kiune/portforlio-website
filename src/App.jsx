import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "/src/components/Hero.jsx"
import About from "/src/components/About.jsx"
import Services from "/src/components/Services.jsx"
import Contact from "/src/components/Contact.jsx"
import ThankYou from "/src/components/ThankYou.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero/>
     <About/>
     <Services/>
     <Contact/>
     <ThankYou/>
    </>
  )
}

export default App
