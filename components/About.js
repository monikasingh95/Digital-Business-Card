import React from "react";
import reactImage from "../images/picture.jpg";

export default function About () {
    return (
        <div>
            <img src={reactImage}
                 alt="React Image"
                 className="logo"
            />
        </div>
    )
}