import React from 'react'
import './Icons.css'
import {FiGithub, FiInstagram, FiTwitter} from 'react-icons/fi';
import {SlSocialFacebook, SlSocialLinkedin} from 'react-icons/sl';

function Icons() {
  return (
    <div className='icons_wrapper'>
        <div className='icons_item'>
            <a href="https://www.facebook.com/profile.php?id=100007712022909" target='blank'><SlSocialLinkedin/></a>
            <a href="https://www.facebook.com/profile.php?id=100007712022909" target='blank'><FiInstagram/></a>
            <a href="https://www.facebook.com/profile.php?id=100007712022909" target='blank'><FiTwitter/></a>
            <a href="https://www.facebook.com/profile.php?id=100007712022909" target='blank'><SlSocialFacebook/></a>
            <a href="https://www.facebook.com/profile.php?id=100007712022909" target='blank'><FiGithub/></a>

        </div>
    </div>
  )
}

export default Icons