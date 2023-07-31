import React from 'react'
import HeaderBottomBar from './HeaderBottomBar'

const Header = () => {
  return (
    <header id='header' className='header'> 

    <div className='headerContainer container'>

        <h1 style={{fontWeight: "light"}}> Hello, I'm A <span>Full Stack Developer</span></h1>
        <p>A passionate web developer that has experience using frontend and backend technologies.</p>

        <a href="Q_Developer_Resume.pdf" download>
        <button>Resume CV</button>
        </a>

    </div>
    <p className='connectText'>Connect with me!</p>
        <HeaderBottomBar />
     

        
    </header>
  )
}

export default Header