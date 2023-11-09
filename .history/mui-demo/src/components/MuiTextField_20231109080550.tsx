
import {Stack, Text } from "@mui/material"

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' />
        </Stack>
    </Stack>
  )
}
