import React from 'react';
import "./topbar.css";

export const topbar = () => {
    return (
    <div className = "topbar">
       <img className = "back" src = {"../UI/back.png"}/>
       <img  className = "home" src = {"../UI/home.png"}/>
       <img  className = "volumn" src = {"../UI/volumn.png"}/>
    </div>
    );
}