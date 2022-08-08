import { createSlice } from "@reduxjs/toolkit";

interface state {
  count: number
}

const initialState: state = {
  count : 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    } ,
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})

export default counterSlice.reducer
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions