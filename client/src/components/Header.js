import React from 'react'
import {Link} from 'react-router-dom'

const Header =()=>{


    return(
        <div className='Header'>

            <h1 className='header'>Warranty Tracker</h1>
         
    <div className='button one'><Link to ='/db/all'>Get All</Link></div>
    <div className='button two'><Link to ='/db/search'>Search</Link></div>
    <div className='button three'><Link to  ='/'>Home</Link></div>
  
            </div>
    )
}
export default Header