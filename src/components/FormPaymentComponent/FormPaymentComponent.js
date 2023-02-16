import { Button, ButtonGroup, Chip, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { PaymentContext } from "../../paymentContext";
import uuid from 'react-uuid';
import PaymentsIcon from '@mui/icons-material/Payments';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function FormPayment() {

    const [paymentMount, setPaymentMount] = React.useState('');
    const [typeMoney, setTypeMoney] = React.useState("");
    const [typeRegister, setTypeRegister] = React.useState("");

    const {
        addPayment
    } = React.useContext(PaymentContext)

    return (
        <Grid maxWidth='xl'>
            <FormControl fullWidth={true}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Ingresa tu Gasto/Ingreso
                </Typography>
                <br/>
                <Stack direction="row" spacing={2}>
                    <Chip 
                        icon={<AttachMoneyIcon />} 
                        label="Gastos" 
                        onClick={() => setTypeRegister("Gasto")}
                        variant={(typeRegister === "Gasto") ? "contained" : "outlined"} 
                        />
                    <Chip 
                        icon={<PaymentsIcon />} 
                        label="Ingresos" 
                        onClick={() => setTypeRegister("Ingreso")}
                        variant={(typeRegister === "Ingreso") ? "contained" : "outlined"} 
                        />
                </Stack>
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
                <Button variant="contained" onClick={()=>addPayment({
                    id: uuid(),
                    text: paymentMount,
                    completed: false
                })}>Registrar</Button>
            </FormControl>
        </Grid>
    );
}

export { FormPayment }