import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import "./styles.css"

function LoginUser() {
    return (
        <div className='container'>
            <div className='main'>
            <h2 className='registro'>Login</h2>
            <div className='carta'>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div id='login'>
                        <TextField
                            id="standard-textarea"
                            label="User"
                            placeholder="Placeholder"
                            multiline
                            variant="standard"
                        />
                        <TextField
                            id="standard-textarea"
                            label="Password"
                            placeholder="Placeholder"
                            multiline
                            variant="standard"
                        />
                    </div>
                </Box>
                <div>
                    <a>
                        olvide mi contraseña
                    </a>
                </div>
                <div className='botonmorado'>
                    <Button className='boton' variant="contained">Crear Evento</Button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LoginUser;