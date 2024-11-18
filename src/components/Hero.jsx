import React from 'react'
import './Hero.css'
import profile_img from '../assets/aditi_photo.jpg'

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_img} alt="aditi" className='profile-photo' />
        <h1><span>I’m Aditi Timmavagol,</span> Web Developer</h1>
        <p>I’m, a tech enthusiast crafting seamless digital experiences with a blend of code and creativity</p>

        <div className='hero-action'>
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero