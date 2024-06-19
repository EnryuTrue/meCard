import React from 'react'
import './About.css'

function About() {
  return (
        <div className='container'>
            <div className='bio'>
                <h2 className='namee'>NSLR</h2>
                <h3 className='job-name'>Frontend Developer</h3>
                <p className='webme'>Nslr3d.com</p>
                <button className='Email-btn'><a href="#" >Email</a></button>
            </div>

            <div className='aboutcontainer'>
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <ul>
                    <li>Web development.</li>
                    <li>Smoking.</li>
                    <li>Blender</li>
                    <li>3D Art</li>
                </ul>
            </div>
    </div>
  )
}

export default About
