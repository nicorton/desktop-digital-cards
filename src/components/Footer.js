import React from 'react'
import facebookLogo from "../images/facebook-icon.png"
import githubLogo from "../images/github-icon.png"
import instaLogo from "../images/instagram-logo.png"
import twitterLogo from "../images/twitter-logo.png"

export default function Footer(){
    return(
        <footer className="footerBox">
            <a href="https://www.facebook.com/nicole.orton.31/" target="_blank" className="facebookLogo"><img src={facebookLogo} className="facebookLogo" alt="Facebook Logo" /> </a>
            <a href="https://www.instagram.com/chaotic_nic/" target="_blank" className="instaLogo"><img src={instaLogo} className="instaLogo" alt="Insta Logo" /></a>
            <a href="https://x.com/chaoticnic" target="_blank" className="twitterLogo"><img src={twitterLogo} className="twitterLogo" alt="Twitter Logo" /></a>
            <a href="https://github.com/nicorton" target="_blank" className="githubLogo"><img src={githubLogo} className="githubLogo" alt="Github Logo" /></a>
        </footer>
    )
}