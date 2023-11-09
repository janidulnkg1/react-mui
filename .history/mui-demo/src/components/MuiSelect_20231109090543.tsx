import {Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react';

export const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([])
    console.log({ countries })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
  return (
    <Box width='250px'>
        <TextField label='Select country'
         select value={countries}
          onChange={handleChange} 
          fullWidth 
          SelectProps={{multiple: true,}}
           size='small' color='secondary' helperText='Please select your country.'>
            <MenuItem value='LK'>Sri Lanka</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='CA'>Canada</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}
