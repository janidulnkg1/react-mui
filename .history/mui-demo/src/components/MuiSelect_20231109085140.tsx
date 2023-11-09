import {Box, TextField, MenuItem } from '@mui/material'

export const MuiSelect = () => {
  return (
    <Box width='250px'>
        <TextField label='Select country' select>
            <MenuItem value='LK'>Sri Lanka</MenuItem>
            <MenuItem value='US'>India</MenuItem>
            <MenuItem value='US'>India</MenuItem>
        </TextField>
    </Box>
  )
}
