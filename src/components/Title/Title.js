import React from "react";
import "./Title.css";

const Title = props =>
    <div>
        <h3 className="title">{props.children}</h3>
        <h5 className="subtitle">Try to click all 12 characters without clicking any of them twice</h5>
    </div>

export default Title;
