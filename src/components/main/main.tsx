import "./main.css";
import {Button} from '../../editor/button';
import { Link } from "react-router-dom";
import React from "react";
import Stack from "@mui/material/Stack";
import {status, currentimage, currentnode } from "../../store";
import {useRecoilState, useRecoilValue} from "recoil";
import {aApple, aStrawberry, aDragonfruit, aBanana, qBerry, qRed, aElsa, aOlaf, qHuman, aStatue, aPyramids, qGreen} from "../../database/questions";
 

const Main = () =>{

    const [node,setnode] = useRecoilState(currentnode);

    return (
        <div className="main">
            <div className = "start-button">
            <Stack spacing = {15} direction = "column">
            <Link to = "/imageselection"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Button variant="contained" onClick = {()=> setnode({ question: qRed.question, yes: qRed.yes, no: qRed.no,})} >
                Fruit  
            </Button>
            </Link>
            <Link to = "/imageselection"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Button variant="contained">
                Disney
            </Button>
            </Link>
                <Link to = "/imageselection"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Button variant="contained">
                Across the World
            </Button>
                </Link>
            </Stack>
            </div>
            <div className = "danny">
                <img src = {"../UI/drachen.png"} width = "210px" height = "200px"/>
            </div>
        </div>
    )
};
export default Main;