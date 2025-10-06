

import React from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOptions/PricingOption';
import ResultCharts from './components/Charts/ResultCharts';

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
      <ResultCharts></ResultCharts>
 
    </>
  )
}

export default App
