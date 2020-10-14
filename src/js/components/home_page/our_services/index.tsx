import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Title from '@components/global/Title';
import ServicesBox from './ServicesBox';

const useStyles = makeStyles({
  our_services_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap'
  }
});

const OurServices = () => {
  const classes = useStyles();

  return (
    <section id='our-services' className='p-3'>
      <Title title='Our services' />

      <div className={`container container-md ${classes.our_services_container}`}>
        <ServicesBox />
      </div>
    </section>
  );
};

export default OurServices;
