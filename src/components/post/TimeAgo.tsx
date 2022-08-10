import React, { FC } from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'
import { Typography } from '@mui/material'

interface TimeAgoProps {
  timestamp?: string
}

const TimeAgo:FC<TimeAgoProps> = ({timestamp}) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }
  return (
    <Typography variant="body2" sx={{fontSize: '0.8rem'}}>
      {timeAgo}
    </Typography>
  )
}

export default TimeAgo