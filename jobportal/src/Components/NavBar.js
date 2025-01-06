import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const user={
        fname:'Talib',
        lname:'Awan'
    }
  return (
    <div className='py-4 bg-slate-50 shadow-md flex justify-around gap-96 text-3xl'>      
         <div className='bg-gradient-to-r from-purple-400 to-blue-800 text-transparent bg-clip-text'>Talib's job Portal</div>
         <div className=' flex text-xl gap-4'>
            <Link to={'/applications'}>Applied Jobs</Link>
            <p>|</p>
            <p>Hi,{user.fname+" "+user.lname}</p>
            </div>
    </div>
  )
}

export default NavBar
