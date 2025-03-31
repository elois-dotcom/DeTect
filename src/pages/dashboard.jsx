import React from 'react'
import { Outlet,Link } from 'react-router-dom'


function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='side-left'>
            <div className='side-left-up'>
           <Link to="/dashboard">   <img src="/Enter.PNG" alt="logo" srcset="" /></Link>
                
            <input type="search" name="search" id="search" placeholder='search'/>
            
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/students">Students</Link>
            <Link to="/supervisor">Supervisors</Link>
            <Link to="/scans">Scan Docs</Link>
            <Link to="/reports">Reports</Link>
            </div>

            <div className='side-left-down'>
            <Link to="">Settings</Link>
            <Link to="">Logout</Link>
            
            </div>
            
            
        
        </div>
         <div className='side-right'>
          
          <Outlet/>
         </div>
    </div>
  )
}

export default Dashboard
