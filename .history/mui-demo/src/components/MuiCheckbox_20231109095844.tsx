import React, { useState } from 'react'
import {Box, FormControlLabel, Checkbox } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookMark

export const MuiCheckbox = () => {
    const [acceptTnc, setAcceptTnc] = useState(false)
    console.log({acceptTnc})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnc(event.target.checked)
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
