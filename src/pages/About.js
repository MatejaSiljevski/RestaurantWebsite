import React from 'react'
import '../styles/about.css'
import AboutImage from '../assets/masala.jpg'

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}>

            </div>
            <div className="aboutBottom">
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quos dolor eius pariatur amet aspernatur ipsam, ex aliquam repellendus corrupti facilis optio animi. Fugit eius eligendi atque velit incidunt. Dolor obcaecati vero natus sequi animi neque aliquam fugiat? Laborum dolor reprehenderit dolorum quasi impedit eum eligendi libero ut dolore a!</p>

            </div>
        </div>
    )
}

export default About
