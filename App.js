import React from 'react'
import {Route,Routes} from "react-router-dom"
import {Alumni, ContactUs, Gallery, Header, Placements} from './components'
import {MainPage,LoginContainer,About} from './components'
import {AnimatePresence} from "framer-motion"


const App = () => {
  return (
    <AnimatePresence>
    <div className="w-screen h-auto flex flex-col">
      <Header/>
    
      <Routes>
        <Route path="/*" element={<LoginContainer/>}/>
        <Route exact path="/mainpage" element={<MainPage/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/placement" element={<Placements/>}/>
      
        <Route exact path="/gallery" element={<Gallery/>}/>
        <Route exact path="/contact" element={<ContactUs/>}/>
      </Routes>
   
    </div>
    </AnimatePresence>
  )
}

export default App