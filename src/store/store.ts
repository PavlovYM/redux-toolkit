import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice';
import postsReducer from './slice/postSlice';
 
export const store = configureStore({
  reducer : {
    counter: counterReducer,
    posts: postsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch