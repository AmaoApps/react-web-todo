import { Avatar, CardHeader, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";

function TodoItem(props) {
    return (
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title={props.text}
            subheader="September 14, 2016"
      />
      /*
        <li>
            <p>{props.text}</p>
        </li>*/
    );
}

export { TodoItem };