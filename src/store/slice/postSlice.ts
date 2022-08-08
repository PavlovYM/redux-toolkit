import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { IPost } from "../../model/IPost";

interface PostsState {
  posts: IPost[]
}

const initialState: PostsState = {
  posts: [
    {
      id: 1,
      title: 'JS',
      body: 'to learn more about'
    },
    {
      id: 2,
      title: 'JS',
      body: 'to learn more about'
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
      prepare(title, body) {
        return {
          payload: {
            id: parseInt(nanoid()),
            title,
            body
          }
        }
      }
    },
  }
})

export default postsSLice.reducer
export const { postAdded } = postsSLice.actions