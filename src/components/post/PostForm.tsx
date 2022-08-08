import { useState } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { postAdded } from '../../store/slice/postSlice'
import { Button, Stack, TextField } from '@mui/material'

const PostForm = () => {
  const [post, setPost] = useState({ title: '', body: '' })
  const dispatch = useAppDispatch()

  const createPosts = () => {
    dispatch(postAdded(post.title, post.body))
    setPost({ title: '', body: '' })
  }
  const btnDisabled = Boolean(post.title) && Boolean(post.body)
 
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <TextField
        label="Title"
        size="small"
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <TextField
        label="Body"
        size="small"
        multiline
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
      />
      <Button variant="contained" onClick={createPosts} disabled={!btnDisabled}>Create Post</Button>
    </Stack>
  )
}

export default PostForm