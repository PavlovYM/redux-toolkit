import { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { postAdded } from '../../store/slice/postSlice'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField
} from '@mui/material'

const PostForm:FC = () => {
  const [post, setPost] = useState({ title: '', body: '' })
  const [userId, setUserId] = useState('')
  const dispatch = useAppDispatch()

  const { users } = useAppSelector(state => state.users)

  const createPosts = () => {
    dispatch(postAdded(post.title, post.body, userId))
    setPost({ title: '', body: '' })
    setUserId('')
  }

  const handleChange = (event: SelectChangeEvent) => {
    setUserId(event.target.value as string);
  };
  
  const btnDisabled = Boolean(post.title) && Boolean(post.body) && Boolean(userId)

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
      <FormControl fullWidth size="small">
        <InputLabel id="user-label">User</InputLabel>
        <Select
          labelId="user-label"
          value={userId}
          label="Age"
          onChange={handleChange}
        >
          {users.map(user => 
            <MenuItem value={user.id} key={user.id}>{user.name}</MenuItem>
          )}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={createPosts} disabled={!btnDisabled}>Create Post</Button>
    </Stack>
  )
}

export default PostForm