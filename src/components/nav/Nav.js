import React, { useEffect } from 'react'
import './Nav.css'
import Resume from '../../media/Resume_Anil.pdf'
import Logo from '../../media/logo.svg'

function Nav() {

    var prevScrollPos = window.pageYOffset;
    const navScroll=()=>{
        var currentScrollPos = window.pageYOffset;
        if(prevScrollPos > currentScrollPos){
            document.getElementById('Nav').style.top = '0'
        }else{
            document.getElementById('Nav').style.top = '-100px'
        }
        prevScrollPos = currentScrollPos
    }
    useEffect(()=>{
        window.addEventListener('scroll',navScroll)
    })
  return (
    <div className='nav_wrapper' id="Nav">
        <div className='nav_logo'>
            <a href='/'><img src={Logo} alt="Logo"/></a>
        </div>
        <div className='nav_items'>
            <div className='nav_list'>
                <ul>
                    <li><a href='#About'><span>01.</span> About</a></li>
                    <li><a href='#Experience'><span>02.</span> Experience</a></li>
                    <li><a href='#Work'><span>03.</span> Work</a></li>
                    <li><a href='#Contact'><span>04.</span> Contact</a></li>
                </ul>
            </div>
            <div className='nav_btn'>
                <a href={Resume} target="blank"><button>Resume</button></a>
            </div>
        </div>
    </div>
  )
}

export default Nav