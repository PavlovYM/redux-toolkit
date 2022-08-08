import React, { FC } from 'react'
import PostItem from './PostItem'
import { IPost } from '../../model/IPost'


interface PostListProps {
  posts: IPost[]
}

const PostsList: FC<PostListProps> = ({ posts }) => {

  return (
    <>
      {posts.map(post =>
        <PostItem post={post} key={post.id} />
      )}
    </>
  )
}

export default PostsList