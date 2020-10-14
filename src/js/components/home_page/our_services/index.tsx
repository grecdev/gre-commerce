import React from 'react';

import { getImage } from '@helpers';
import './style.scss';

import Title from '@components/global/Title';

const OurServices = () => {
  return (
    <section id='our-services' className='p-3'>
      <Title title='Our services' />

      <div className='container container-md our-services-container'>
        <div className='services-box'>
          <img src={getImage('icons/check-delivery-icon.svg')} alt='' />

          <p>Check on delivery</p>
        </div>

        <div className='services-box'>
          <img src={getImage('icons/support-icon.svg')} alt='' />

          <p>24/7 support</p>
        </div>

        <div className='services-box'>
          <img src={getImage('icons/fast-delivery-icon.svg')} alt='' />

          <p>1-3 days delivery</p>
        </div>

        <div className='services-box'>
          <img src={getImage('icons/return-policy-icon.svg')} alt='' />

          <p>30 days free return policy</p>
        </div>

        <div className='services-box'>
          <img src={getImage('icons/payment-icon.svg')} alt='' />

          <p>Cash & POS & Online payment</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
