import React from 'react'
import './Left.css'
import {FiGithub, FiInstagram, FiTwitter} from 'react-icons/fi';
import {SlSocialFacebook, SlSocialLinkedin} from 'react-icons/sl';

function Left() {
  return (
    <div className='left_wrapper'>
        <div className='left_icons'>
            <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100007712022909" target='blank'><SlSocialFacebook/></a></li>
                <li><a href="https://www.instagram.com/just__anil__/" target='blank'><FiInstagram/></a></li>
                <li><a href="https://www.linkedin.com/in/anil-parusubotu/" target='blank'><SlSocialLinkedin/></a></li>
                <li><a href="https://twitter.com/just_anil_" target='blank'><FiTwitter/></a></li>
                <li><a href="https://github.com/anil369p" target='blank'><FiGithub/></a></li>
            </ul>
            <div className='left_line'>

            </div>
        </div>
    </div>
  )
}

export default Left