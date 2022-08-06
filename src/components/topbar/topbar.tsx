import React from 'react';
import { Link } from "react-router-dom";
import "./topbar.css";

export const topbar = () => {
    return (
    <div className = "topbar">
        <Link to = "/imageselection"  style={{ color: 'inherit', textDecoration: 'inherit'}}> 
            <img className = "back" src = {"../UI/back.png"}/>
        </Link>
        <Link to = "/"  style={{ color: 'inherit', textDecoration: 'inherit'}}> 
            <img  className = "home" src = {"../UI/home.png"}/>
        </Link>
       <img  className = "volumn" src = {"../UI/volumn.png"}/>
       
    </div>
    );
}