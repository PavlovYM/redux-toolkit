import {useAppSelector} from '../hooks/redux'

import { Grid, Typography } from '@mui/material'
import PostsList from '../components/post/PostsList'
import PostForm from '../components/post/PostForm'

const Posts = () => {
  const {posts} = useAppSelector(state => state.posts)
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h4' component="h2" gutterBottom sx={{textAlign: 'center'}}>Posts</Typography>
      </Grid>
      <Grid item xs={12}>
        <PostForm />
      </Grid>
      <PostsList posts={posts}/>
    </Grid>
  )
}

export default Posts