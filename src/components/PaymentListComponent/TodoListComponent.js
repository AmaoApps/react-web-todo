import { Stack } from "@mui/material";
import React from "react";

function TodoList(props) {
    return (
        <Stack spacing={1}>
                {props.children}
        </Stack>
    );
}

export { TodoList };