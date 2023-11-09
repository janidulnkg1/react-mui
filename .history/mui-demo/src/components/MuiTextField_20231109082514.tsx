
import {Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"

export const MuiTextField = () => {
    const [value, setValue] = useState('')
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
            <TextField label='Form Input' required value={value} onChange={e => setValue(e.target.value)} error={!value} helperText={!value ? ''}/>
            <TextField label='Password' type='password' helperText='Do not Share Your Password with Anyone' disabled />
            <TextField label='Read only' InputProps={{ readOnly: true}} />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>,
            }} />
            <TextField label='Weight' InputProps={{endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
            }} />
        </Stack>
    </Stack>
  )
}
