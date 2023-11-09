
import {Stack, TextField } from "@mui/material"

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='First Name' variant="outlined" />
            <TextField label='Last Name' variant="filled" />
            <TextField label='Age' variant="standard" />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Small secondary' size="small" color="secondary" />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Username' required />
            <TextField label='Password' type='password' helperText='Do not Share Your Password with Anyone' disabled />
            <TextField label='Read only' InputProps={{ readOnly: true}} />
        </Stack>
        
    </Stack>
  )
}
