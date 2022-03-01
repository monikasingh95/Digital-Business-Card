import React from "react";
import reactImage from "../dist/picture.jpg";

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