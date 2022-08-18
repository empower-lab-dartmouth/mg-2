import React from 'react';
import "./imageselection1.css";
import Images from "../../database/images1.json";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { currentimage } from '../../store';
import {useRecoilState, useRecoilValue} from "recoil";

const Imageselection1 = () => {

    const [pickedimage, setpickedimage] = useRecoilState(currentimage);

    const chooseimage = (value: any) => {
        setpickedimage({ label: value.lable, path: value.path});

    }
 

     return (
       <div className = "image-selection1">
        <div className = "box1">
        <img className = "space1" src = {"../UI/drachenhappy.png"} height = "200px" width = "150px"/>
           {Images.map((value, index) => {
               return(
            <Button id = {index.toString()} onClick = {() => chooseimage(value)}>
                 <Link to = "/game"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <img className = "image1" src = {"../images1/"+value.path} height = "250px" width = "250px" />
                 </Link>
            </Button>) }
               )
           }
           </div>
       </div>
     )
};

export default Imageselection1;