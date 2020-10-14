import React from 'react';
import { Link } from 'react-router-dom';

import { getImage } from '@helpers';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Navbar from '@components/global/header/Navbar';
import HeaderSearchCart from '@components/global/header/HeaderSearchCart';

const useStyles = makeStyles(theme => ({
  main_header: {
    background: theme.palette.primary.main,
    boxShadow: 'none',
    padding: '1rem',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap'
  },
  nike_logo: {
    width: '80px'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.main_header}>
      <Link to='/' id='nike-logo'>
        <img className={classes.nike_logo} src={getImage('nike-logo.svg')} alt='nike-logo' />
      </Link>

      <Navbar />

      <HeaderSearchCart />
    </AppBar>
  );
};

export default Header;
