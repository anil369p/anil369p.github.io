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
                <p>Hello! My name is Anil and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                <p>Here are a few technologies I've been working with recently:</p>
            </div>
            <div className='about_list'>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Redux</li>
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