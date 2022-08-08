import { Typography } from "@mui/material"
import { FC } from "react"
import { useAppSelector } from "../../hooks/redux"

interface PostAuthorProps {
  userId: number | undefined | null
}

const PostAuthor:FC<PostAuthorProps> = ({userId}) => {
  const {users} = useAppSelector(state => state.users)
  const [author] = users.filter(user => user.id === userId)
  
  return (
    <Typography variant="body2">
      by {author ? author.name : 'Unknown author'}
    </Typography>
  )
}

export default PostAuthor