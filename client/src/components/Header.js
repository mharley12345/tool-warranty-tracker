import React from 'react'
import {Link} from 'react-router-dom'

const Header =(props)=>{


    return(
        <div className='Header'>

            <h1 className='header'>Warranty Tracker</h1>
         
    <div className='button one'><Link to ="/" component={props.ToolCard}>Get All</Link></div>
    <div className='button two'><Link to ='/search'>Search</Link></div>
    <div className='button three'><Link to  ='/'>Home</Link></div>
    <div className='button four'><Link to ='/add'>Add</Link></div>
  
            </div>
    )
}
export default Header