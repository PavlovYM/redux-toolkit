import {createSlice} from '@reduxjs/toolkit'
import { IUser } from '../../model/IUser'

interface state {
  users: IUser[]
}

const initialState:state = {
  users: [
    {id: 1, name: 'Dude'},
    {id: 2, name: 'Neil'},
    {id: 3, name: 'Dave'},
  ]
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers : {

  }
})

export default userSlice.reducer
