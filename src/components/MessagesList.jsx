import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';

const MessagesList = ({ messages }) => (
  <List>
          {messages.map(({ id, name, picture, text }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader>Today</ListSubheader>}
              {id === 3 && <ListSubheader>Yesterday</ListSubheader>}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={picture} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={text} />
              </ListItem>
            </React.Fragment>
          ))}
    </List>
)

export default MessagesList;