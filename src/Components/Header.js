import React from 'react'
import HeaderBottomBar from './HeaderBottomBar'

const Header = () => {
  return (
    <header id='header' className='header'> 

    <div className='headerContainer container'>

        <h1 style={{fontWeight: "light"}}> I AM A PROFESSIONAL<span>WEB DEVELOPER</span></h1>
        <p></p>

        <div className='headerButtonContainer'>
        <a href="SD_Qunnderrie.pdf" download>
        <button style={{ width: "150px"}}>Resume CV</button>
        </a>

        <a href='mailto:qunnderrie@gmail.com'>
        <button style={{ width: "150px"}}>Hire Me</button>
        </a>
        </div>

    </div>
    <p className='connectText'>Social Media Links</p>

        <HeaderBottomBar />
     

        
    </header>
  )
}

export default Header