

import React from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOptions/PricingOption';
import ResultCharts from './components/Charts/ResultCharts';
import BookData from './components/BookData/BookData';

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
      <ResultCharts />
      <BookData />
 
    </>
  )
}

export default App
