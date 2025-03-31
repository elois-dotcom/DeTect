import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
          <h1 className='hi'>Welcome to <span>DiTect</span></h1>
          <div className='cards'>
            
              <Link className='card'to="/students"><h2>
                Students
                </h2></Link>
              <Link className='card'to="/supervisor"><h2>
                Supervisors
                </h2></Link>
              <Link className='card'to="/reports"><h2>
                Reports
                </h2></Link>
               

                
          </div>
      
    </div>
  )
}

export default Home
