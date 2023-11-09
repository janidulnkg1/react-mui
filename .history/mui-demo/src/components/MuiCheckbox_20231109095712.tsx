import React, { useState } from 'react'
import {Box, FormControlLabel, Checkbox } from '@mui/material'

export const MuiCheckbox = () => {
    const [acceptTnc, setAcceptTnc] = useState(false)
    console.log({acceptTnc})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        set
    }
  return (
    <Box>
        <Box>
            <FormControlLabel 
            label='I accept the terms and conditions' 
            control={<Checkbox checked={acceptTnc} onChange={handleChange}/>} />
        </Box>
    </Box>
  )
}
