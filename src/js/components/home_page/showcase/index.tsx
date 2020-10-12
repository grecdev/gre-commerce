import React from 'react';

import { Link } from 'react-router-dom';

import './style.scss';

const HomeShowcase = () => {
  return (
    <section id='home-showcase' className='position-relative'>
      <div className='showcase-text text-center'>
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
