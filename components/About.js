import React from "react";
import reactImage from "../images/picture.jpg";
import { FaGithub} from "react-icons/fa";

export default function About () {
    return (
        <div className="outerBox">
            <div className="profilePic"></div>

            <div className="rectangle91"></div>

            <div className="button1">
                <p className="linkedIn">LinkedIn</p>
            </div>

            <div className="button2">
                <p className="email">Email</p>
            </div>

            <div className="monika-web">
                <p>Monika's Website</p>
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
                <p>This is about me</p>
            </div>

            <div className="social-icon-background"></div>

            <div className="github-icon">
                <FaGithub/>
            </div>

        </div>
    )
}