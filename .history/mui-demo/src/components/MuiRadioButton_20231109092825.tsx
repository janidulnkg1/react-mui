import React from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'

export const MuiRadioButton = () => {
  return (
    <Box>
        <FormControl>
            <FormLabel id='job-experience-group-label'>
                Years of Experience
            </FormLabel>
            <RadioGroup
                name='job-experience-group'
                aria-labelledby='job-experience-group-label'>
                <FormControlLabel control={</>}
            </RadioGroup>
        </FormControl>
    </Box>
  )
}
