import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice';
import postsReducer from './slice/postSlice';
import userReducer from './slice/userSlice';
 
export const store = configureStore({
  reducer : {
    counter: counterReducer,
    posts: postsReducer,
    users: userReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch