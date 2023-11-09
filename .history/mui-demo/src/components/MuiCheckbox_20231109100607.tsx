import React, { useState } from 'react'
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

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
        <Box>
            <Checkbox
            icon={<BookmarkBorderIcon/>}
            checkedIcon={<BookmarkIcon/>}
            checked={acceptTnc}
            onChange={handleChange}
            />
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                <FormControlLabel 
                    label='I accept the terms and conditions' 
                    control={<Checkbox checked={acceptTnc} onChange={handleChange}/>} 
                />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}
