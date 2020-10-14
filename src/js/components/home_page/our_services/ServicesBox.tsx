import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { getImage } from '@helpers';

const useStyles = makeStyles({
  sevices_box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    '& img': {
      marginRight: '0.5rem'
    }
  }
});

const boxes_array = [
  { icon: getImage('icons/check-delivery-icon.svg'), text: 'Check on delivery' },
  { icon: getImage('icons/support-icon.svg'), text: '24/7 support' },
  { icon: getImage('icons/fast-delivery-icon.svg'), text: '1-3 days delivery' },
  { icon: getImage('icons/return-policy-icon.svg'), text: '30 days free return policy' },
  { icon: getImage('icons/payment-icon.svg'), text: 'Cash & POS & Online payment' }
];

const ServicesBox = () => {
  const classes = useStyles();

  return (
    <>
      {boxes_array.map((box, index) => (
        <div key={index} className={classes.sevices_box}>
          <img src={box.icon} alt='box icon' />

          <p>{box.text}</p>
        </div>
      ))}
    </>
  );
};

export default ServicesBox;
