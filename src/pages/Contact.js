import React from 'react'
import '../styles/contact.css'
import ContactImage from '../assets/fooda.jpeg'

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage:`url(${ContactImage})`}}>
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form action="" id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" placeholder="Enter your Name"/>                   
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your email" name="name" />
                    <label htmlFor="message">Message</label>    
                    <textarea name="message" id="" placeholder="Enter your message" cols="30" rows="6"></textarea>
                    <button type="submit">Send messages</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
