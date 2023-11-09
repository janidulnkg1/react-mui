import {Box, TextField, MenuItem } from '@mui/material'

export const MuiSelect = () => {
  return (
    <Box width='250px'>
        <TextField label='Select country' select>
             <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='IN'>India</MenuItem>

        </TextField>
    </Box>
  )
}
