import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about_wrapper' id='About'>
        <div className='about_content'>
            <div className='about_heading'>
                <h3><span>01.</span> About Me</h3>
                <div></div>
            </div>
            <div className='about_text'>
                <p>Hello! My name is Anil and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try the clone of online shopping application — turns out a better understanding and taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, and I've had the privilege of working at  well known corporation. My main focus these days is building accessible and reusable components at Tech Mahindra for a variety of clients.</p>
                <p>Here are a few technologies I've been working with recently:</p>
            </div>
            <div className='about_list'>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
        </div>
        <div class="about_imagebox">
        <div className='about_image'>

        </div>
        </div>
    </div>
  )
}

export default About