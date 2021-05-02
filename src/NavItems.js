
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Home from './Home';
import About from './About';
import Drawer from '@material-ui/core/Drawer';

import PostPage from './';
import { colors } from '@material-ui/core';
import { SignalWifi1BarLock } from '@material-ui/icons';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function NavItems(){
    const classes = useStyles();
    return (
        <div>
             <List>
          <ListItem button component="a" href="/About" key='About'>
            <ListItemIcon></ListItemIcon>
          </ListItem>
          <ListItem button component="a" href="/PostPage" key='PostPage'>
            <ListItemIcon></ListItemIcon>
            </ListItem>
            <ListItem button component="a" href="/NewPost" key='NewPost'>
            <ListItemIcon></ListItemIcon>
          </ListItem>
          <ListItem button component="a" href="/Home" key='Home'>
            <ListItemIcon></ListItemIcon>
          </ListItem>
      </List>
        </div>
    );
}

export default NavItems;

{/* <List>
{['Home', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  <ListItem button key={text}>
    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
))}
</List> */}
