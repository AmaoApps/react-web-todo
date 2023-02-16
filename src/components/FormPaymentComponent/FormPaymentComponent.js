import { Button, ButtonGroup, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function FormPayment() {

    const [paymentMount, setPaymentMount] = React.useState(0);
    const [typeMoney, setTypeMoney] = React.useState("");

    return (
        <Grid maxWidth='xl'>
            <FormControl fullWidth={true}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Ingresa tu Gasto/Ingreso
                </Typography>
                <br/>
                <Stack direction="row" spacing={2}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button variant={(typeMoney === "$") ? "contained" : "outlined"} onClick={() => setTypeMoney("$")}>$</Button>
                        <Button variant={(typeMoney === "S/") ? "contained" : "outlined"} onClick={() => setTypeMoney("S/")}>S/</Button>
                    </ButtonGroup>
                    <TextField
                        type="number"
                        required
                        id="outlined-required"
                        fullWidth={true}
                        label="Cantidad"
                        onChange={(e) => setPaymentMount(e.target.value)}
                        value={paymentMount}
                    />
                </Stack>
                <br/>
                <Button variant="contained">Registrar</Button>
            </FormControl>
        </Grid>
    );
}

export { FormPayment }