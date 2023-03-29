import { TextField } from '@mui/material'
import React from 'react'

const AddBook = () => {
  return (
    <div>
      <br />
      <br />
      <TextField id='outlined-baisic' label="Book name" variant='outlined'/><br />
      <TextField id='outlined-baisic' label="Authore" variant='outlined'/><br />
      <TextField id='outlined-baisic' label="Category" variant='outlined'/><br />
    </div>
  )
}

export default AddBook
