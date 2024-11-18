import React from 'react'
import './Contact.css' 


const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message at anytime. </p>

                <div className="contact-details">
                    <div className="contact-detail">
                        <p>email:</p>
                        <p>timmavagoladiti@gmail.com</p>
                   
                    </div>
                    <div className="contact-detail">
                        <p>Contact no:</p>
                        <p>+91 9148567359</p>
                        
                    </div>
                    <div className="contact-detail">
                        <p>Location:</p>
                        <p>Pant Nagar, Belagavi,
                             pin code-591103</p>   
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'> Submit now</button>
                </form>

        </div>

    </div>
  )
}

export default Contact