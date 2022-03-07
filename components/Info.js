import React from "react";
import {FaEnvelope, FaLinkedinIn} from "react-icons/fa";

export default function Info() {
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
        </div>
    )
}