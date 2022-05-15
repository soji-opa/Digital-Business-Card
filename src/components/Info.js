import React from "react"
import Reactimg from '../images/img.png'
import Sojiimg from '../images/sojiopa.jpeg'
import linkedin from '../images/linkedin-brands.svg'
import envelope from '../images/envelope-solid.svg'

export default function Info() {
    return (
        <div className="info--section">
            <div className="div--img">
                <img className="info--img" src={Sojiimg} alt="business profile"/>
            </div>

            <div className="container">
                <h3 className="main--title">Azeez O. Olasoji</h3>
                <h5 className="main--des">PhD Candidate || Frontend Developer || Web3 Research Analyst</h5>
                <p className="main--site">soji.Near</p>
                <div className="btn">

                    <a className="email--btn" href = "mailto: azeezolasoji@gmail.com">
                        <img className="btn--icon" src={envelope}/>
                        Email
                    </a>

                    <a className="linkedin--btn" href="https://www.linkedin.com/in/azeez-olasoji/" 
                            target="_blank" rel="noreferrer">
                        <img className="btn--icon" src={linkedin} />
                        Linkedin
                    </a>
                    
                </div>
            </div>
        </div>
    )
}