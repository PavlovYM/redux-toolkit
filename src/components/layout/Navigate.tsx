import React, { FC } from 'react'
import { List } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';

import {NavLink, useLocation} from 'react-router-dom'

interface NavigetProps {
  open: boolean
}

const Navigate:FC<NavigetProps> = ({open}) => {
  let {pathname} = useLocation();
  
  const nav = [
    {name: 'Home', to: '/', icons: <HomeIcon/>},
    {name: 'Posts', to: '/posts', icons: <AutoStoriesIcon/>},
    {name: 'Counter', to: '/counter', icons: <CalculateIcon/>},
  ]
  

  return (
    <List>
      {nav.map(text => (
        <ListItem key={text.name} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              color: pathname === text.to ? '#1976d2' : ''
            }}
            component={NavLink}
            to={text.to}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: pathname === text.to ? '#1976d2' : ''
              }}
              
            >
              {text.icons}
            </ListItemIcon>
            <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default Navigate