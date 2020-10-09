import React from 'react';
import { Link } from 'react-router-dom';

import nikeLogo from '../../../media/nike-logo.svg';

const Header = () => {
  return (
    <header id='main-header'>
      <Link to='/'>
        <img src={nikeLogo} alt='nike-logo' />
      </Link>
    </header>
  );
};

export default Header;
