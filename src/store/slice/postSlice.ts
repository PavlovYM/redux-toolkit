import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { IPost } from "../../model/IPost";

interface PostsState {
  posts: IPost[]
}

const initialState: PostsState = {
  posts: [
    {
      id: 1,
      title: 'JS',
      body: 'to learn more about',
      userId: null,
      date: sub(new Date(), {minutes: 10}).toISOString()
    },
    {
      id: 2,
      title: 'JS',
      body: 'to learn more about',
      userId: null,
      date: sub(new Date(), {minutes: 5}).toISOString()
    },
  ]
}

const postsSLice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, actions: PayloadAction<IPost>) {
        state.posts.push(actions.payload)
      },
      prepare(title, body, userId) {
        return {
          payload: {
            id: parseInt(nanoid()),
            title,
            body,
            userId,
            date: new Date().toISOString()
          }
        }
      }
    },
  }
})

export default postsSLice.reducer
export const { postAdded } = postsSLice.actions