import React, { useState } from 'react'
import {Box, FormControlLabel, Checkbox } from '@mui/material'

export const MuiCheckbox = () => {
    const [acceptTnc, setAcceptTnc] = useState(false)
  return (
    <Box>
        <Box>
            <FormControlLabel 
            label='I accept the terms and conditions' 
            control={<Checkbox />} ></FormControlLabel>
        </Box>
    </Box>
  )
}
