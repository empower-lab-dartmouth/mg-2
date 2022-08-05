import React from 'react';
import "./imageselection.css";
import Images from "../../database/images.json";
import Button from '@mui/material/Button';

const Imageselection = () => {

     const chooseimage = (value: any, index: number) => {

     }

     return (
       <div className = "image-selection">
        <div className = "box">
        <img className = "space" src = {"../UI/drachenhappy.png"} height = "200px" width = "200px"/>
           {Images.map((value, index) => {
               return(
            <Button id = {index.toString()} onClick = {() => chooseimage(value, index)}>
            <img src = {"../images/"+value.path} height = "250px" width = "250px"/>
            </Button>) }
               )
           }
           </div>
       </div>
     )
};

export default Imageselection;