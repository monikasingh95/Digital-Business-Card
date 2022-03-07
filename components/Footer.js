import React from "react";
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer() {
    return (
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
    )
}