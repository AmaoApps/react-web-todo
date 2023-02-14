import { IconButton, Switch } from "@mui/material";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from "react";


function ThemeAppSwitcher() {

    const toogleColorModeAction = () => {
        console.log('Click on Toggle');
    }

    return (
        <IconButton onClick={() => toogleColorModeAction()}>
             <Brightness7Icon />
        </IconButton>
    );
}


export { ThemeAppSwitcher };