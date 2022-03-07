import React from "react";
import reactImage from "../images/picture.jpg";
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import { FaLinkedinIn} from "react-icons/fa";
import { FaEnvelope} from "react-icons/fa";

export default function About () {
    return (
        <div className="outerBox">
            <div className="profilePic"></div>

            <div className="rectangle91"></div>

            <button onClick={() => window.location = "https://www.linkedin.com/in/monika-singh-04a40aba/"} className="button1">
                < FaLinkedinIn />
            </button>

            <button onClick={() => window.location = 'mailto:monminu11@gmail.com'} className="button2">
                < FaEnvelope />
            </button>

            <div className="monika-web">
                <p></p>
            </div>

            <div className="anne-gracia"></div>

            <div className="react">
                <p>Currently Learning React</p>
            </div>

            <div className="full-name">
                <p>Monika Singh</p>
            </div>

            <div className="interest">
                <h2>Interests</h2>
            </div>

            <div className="about">
                <h2>About</h2>
            </div>

            <div className="my-interest">
                <p>Books | Rubik's Cube | Skates| Bollywood dance | Series | Coffee | Health & Wellness Articles | Yoga</p>
            </div>

            <div className="about-me">
                <p>I started coding in 2021 but still consider myself as a beginner.
                    I have a basic knowledge of HTML, CSS and javascript and trying my luck in React.
                    I always look up to learn something new and challenging</p>
            </div>

            <div className="social-icon-background">
                <div className="icons" onClick={() => window.location = "https://twitter.com/monminuu"}>
                    <FaTwitter color={"white"} size={"2em"}/>
                </div>
                <div className="icons" onClick={() => window.location = "https://www.facebook.com/monminuu/"}>
                    <FaFacebook color={"white"} size={"2em"}/>
                </div>
                <div className="icons" onClick={() => window.location = "https://www.instagram.com/monminuu/"}>
                    <FaInstagram color={"white"} size={"2em"}/>
                </div>
                <div className="icons" onClick={() => window.location = "https://github.com/monminuu"}>
                    <FaGithub color={"white"} size={"2em"}/>
                </div>
            </div>
        </div>
    )
}