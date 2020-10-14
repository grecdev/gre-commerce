import React from 'react';

import { Link } from 'react-router-dom';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { getImage } from '@helpers';

const useStyles = makeStyles(theme => ({
  home_showcase: {
    height: '100vh',
    background: `url(${getImage('home_page/desktop-hero-bg.png')}) no-repeat center/cover`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'nowrap'
  },
  showcase_text: {
    marginLeft: '10rem',
    '& h1': {
      fontSize: '2.5rem',
      marginBottom: '0.5rem'
    },
    '& h2': {
      fontSize: '1.8rem'
    },
    '& h1, & h2': {
      color: theme.palette.common.white
    },
    '& > a': {
      display: 'inline-block'
    }
  }
}));

const HomeShowcase = () => {
  const classes = useStyles();

  return (
    <section id='home-showcase' className={`position-relative ${classes.home_showcase}`}>
      <div className={`${classes.showcase_text} text-center`}>
        <h1>New summer sale</h1>
        <h2 className='mb-1'>Airmax tailwind IV</h2>

        <Link to='/' className='btn btn-orange'>
          Shop now
        </Link>
      </div>
    </section>
  );
};

export default HomeShowcase;
