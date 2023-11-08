import {Button, Stack} from "@mui/material"

export const MuiButton = () => {
  return (
    <Stack spacing={2} direction=''>
        <Button variant='text'>Text</Button>
        <Button variant='contained'></Button>
        <Button variant='outlined'></Button>

    </Stack>
  )
}
