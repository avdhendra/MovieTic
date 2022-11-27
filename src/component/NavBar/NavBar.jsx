import React from 'react';
import { Outlet } from 'react-router-dom';
import useStyles from '../../styles';

function NavBar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar}>NavBar</div>
      <Outlet />
    </>
  );
}

export default NavBar;
