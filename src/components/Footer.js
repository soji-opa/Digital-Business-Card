import React from 'react'
import Twittericon from '../images/TwitterIcon.png'
import Mediumicon from '../images/medium.png'
import Instagramicon from '../images/InstagramIcon.png'
import Githubicon from '../images/GitHubIcon.png'

export default function Footer(){
    return (
        <div className='container footer-section'>
            
            <a href="https://twitter.com/King_Soji" 
                target="_blank" rel="noreferrer">
                <img src={Twittericon} ></img>
            </a>

            <a href="https://ramblingsofthehegemon.substack.com/" 
                target="_blank" rel="noreferrer">
                <img src={Mediumicon} width="25px"></img>
            </a>
            
            <a href="https://www.instagram.com/king_soji/" 
                target="_blank" rel="noreferrer">
                <img src={Instagramicon} ></img>
            </a>

            <a href="https://github.com/soji-opa" 
                target="_blank" rel="noreferrer">
                <img src={Githubicon} ></img>
            </a>
        </div>
    )
}