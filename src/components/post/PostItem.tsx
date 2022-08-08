import React, { FC } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'

import { IPost } from '../../model/IPost';
import PostAuthor from './PostAuthor';

interface PostItemProps {
  post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {post.body.substring(0, 100)}
          </Typography>
          <PostAuthor userId={post.userId}/>
        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default PostItem