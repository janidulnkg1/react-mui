
import {Stack, TextField } from "@mui/material"

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='First Name' variant="outlined" />
            <TextField label='Last Name' variant="filled" />
            <TextField label='Age' variant="standard" />
        </Stack>
    </Stack>
  )
}
