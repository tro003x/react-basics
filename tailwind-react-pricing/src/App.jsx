

import React from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOptions/PricingOption';

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      {/* <DaisyNav></DaisyNav> */}
      <main>
        <PricingOption />
      </main>

    </>
  )
}

export default App
