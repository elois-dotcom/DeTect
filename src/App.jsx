import { useState } from 'react'
import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import AddUser from './components/interface'
import Dashboard from './pages/dashboard'
import Reports from './pages/reports'
import Supervisors from './pages/supervisor'
import Students from './pages/students'
import Scans from './pages/scans'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/supervisor' element={<Supervisors />} />
          <Route path='/students' element={<Students />} />
          <Route path='/scans' element={<Scans />} />

          


        </Route>
        <Route path='/'element={<AddUser/>}/>
      </Routes>
     </BrowserRouter>
    </>
      
    
  )
}

export default App
