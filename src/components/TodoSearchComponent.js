import { FormControl, InputLabel, TextField, Stack } from "@mui/material";
import React, { useState } from "react";
import { TEXTFIELD_SEARCH_PAYMENTS } from "../utils/constants.js";

function TodoSearch() {

    const [searchValue, setSearchValue] = useState('');

    return (
        <FormControl>
            <TextField id="search-payment" label={TEXTFIELD_SEARCH_PAYMENTS} variant="outlined" 
                onChange={(e) => {
                    console.log(e.target.value);
                    setSearchValue(e.target.value);
                }}
            />
            <div><p>{searchValue}</p></div>
        </FormControl>
    );
}

export { TodoSearch };