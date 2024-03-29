import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = ({ children }) => (
  <AppBar position="static">
    <Toolbar>
      {children}
    </Toolbar>
  </AppBar>
)

export default Header;