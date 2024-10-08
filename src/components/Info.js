import React from 'react'
import nicHeadshot from "../images/nic-orton-headshot.jpg"
import linkedInLogo from "../images/linkedin-logo.png"
import emailLogo from "../images/email-icon.jpg"

export default function Info(){
    return (
        <main className="infoBox">
            <div className="nicHeadshotDiv">
                <img src={nicHeadshot} className="nicHeadshot" alt="Nic Orton Headshot"/>
            </div>
            <h1>Nic Orton</h1>
            <p className="jobTitle">Frontend Developer</p>
            <p><a href="https://nicorton.co.za" target="_blank">nicorton.co.za</a></p>
            <div className="buttons-div">
                <a href="mailto:orton.nicole115@gmail.com" target="_blank">
                    <div className="email--div">
                        <img className="email--logo" src={emailLogo} />
                        <button className="email--button">Email</button>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/nicole-orton-22795140/" target="_blank">
                    <div className="linkedin--div">
                        <img className="linkedin--logo" src={linkedInLogo} />
                        <button className="linkedin--button">LinkedIn</button>    
                    </div>
                </a>    
            </div>
        </main>
    )
}