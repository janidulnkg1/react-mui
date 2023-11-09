import {Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react';

export const MuiSelect = () => {
    const [countries, setCountries] = useState('')
    console.log({ countries })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountries(event.target.value as string)
    }
  return (
    <Box width='250px'>
        <TextField label='Select country' select value={country} onChange={handleChange} fullWidth SelectProps={{multiple: true}}>
            <MenuItem value='LK'>Sri Lanka</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='CA'>Canada</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}
