import React from 'react'
import './About.css'
import profile_img from '../assets/aditi_photo.jpg';


const About = () => {
  return (
    <div  className='about' id='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>

        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="profile-img"  className='profileimg'/>
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>I'm a experienced Web Developer with a passion for creating intuitive digital experiences.</p>
                    <p>Combining my technical skills in web development with a creative flair for design, I focus on building seamless, user-friendly websites.</p>
                </div>

                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>

        <div className="about-achivements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>

        </div>

    </div>
  )
}

export default About