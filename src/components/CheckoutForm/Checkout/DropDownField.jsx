import React from 'react'
import { Grid, InputLabel, MenuItem, Select } from '@mui/material'
const DropDownField = ({ label }) => {
  return (
    <Grid item xs={12} sm={6}>
      <InputLabel>
      {label}
      </InputLabel>
      <Select fullWidth >
        <MenuItem value="">{"from API 1"}</MenuItem>
        <MenuItem value="">{"from API 2"}</MenuItem>
        <MenuItem value="">{"from API 3"}</MenuItem>
      </Select>
    </Grid>
  )
}

export default DropDownField
