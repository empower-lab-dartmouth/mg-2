import "./game.css";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";
import React from "react";
import {ButtonSmall} from '../../editor/button-small';

const Game = () => {
    return(
        <div className = "game">
             <img className = "danny" src = "../UI/drachenispy.png" height = "250px" width = "200px"/>
             <div className = "bubble">
             <img  src = "../UI/conver.png" height = "500px" width = "1000px" />
             <div className = "content">
                  <p className = "question">Is your fruit red?</p>
                  <div className = "button-area">
                  <Stack spacing = {10} direction = "row">
                    <ButtonSmall>
                        Yes
                    </ButtonSmall>
                    <ButtonSmall sx={{backgroundColor: "rgba(244, 81, 109, 0.51)"}}>
                        No
                    </ButtonSmall>
                    </Stack>
                  </div>
             </div>
             </div>
        </div>
    )
};

export default Game;