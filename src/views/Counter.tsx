import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { increment, decrement, reset, incrementByAmount } from '../store/slice/counterSlice';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography
} from '@mui/material'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

const Counter = () => {
  const [value, setValue] = useState<number>(0)
  const dispatch = useAppDispatch()
  const {count} = useAppSelector(state => state.counter)

  
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(value))
  }

  const handleIincrement = () => {
    dispatch(increment())
  } 
  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleRessetAll = () => {
    dispatch(reset())
    setValue(0)
  }

  return (
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Counter = {count}
            </Typography>
          </CardContent>
          <CardActions>
            <FormControl sx={{ width: '100%'}} variant="outlined">
              <OutlinedInput
                id="count"
                type='text'
                value={value}
                onChange={e => setValue(Number(e.target.value) || 0)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleIncrementByAmount}
                    >
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </CardActions>
          <CardActions>
            <Button size="small" onClick={handleIincrement} variant="contained" color='success'>
              <AddIcon />
            </Button>
            <Button size="small" onClick={handleDecrement} variant="contained" color='success'>
              <RemoveIcon/>
            </Button>
            <Button size="small" onClick={handleRessetAll} variant="contained" color='warning'>
              <ClearIcon/>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Counter