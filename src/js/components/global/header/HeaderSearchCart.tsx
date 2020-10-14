import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles(theme => ({
  header_search_cart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    '& .input-box': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'nowrap',
      borderRadius: '9px'
    },
    '& .input-box #search-product-input': {
      background: theme.palette.common.white,
      padding: '0.3rem 1rem',
      paddingLeft: '2.5rem',
      color: theme.palette.primary.main,
      '&::placeholder': {
        color: theme.palette.primary.main,
        fontStyle: 'italic',
        fontWeight: 100
      }
    },
    '& #enable-cart-menu': {
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}));

const HeaderSearchCart = () => {
  const [search_value, setSearchValue] = useState<string>('');
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const string_value = event.target.value;

    setSearchValue(string_value);

    event.stopPropagation();
  };

  return (
    <div className={classes.header_search_cart}>
      <div className='input-box position-relative'>
        <div className='input-image position-absolute'>
          <SearchOutlinedIcon color='primary' />
        </div>

        <input
          id='search-product-input'
          placeholder='Search for a product'
          type='text'
          value={search_value}
          onChange={handleChange}
        />
      </div>

      <button id='enable-cart-menu' className='ml-1' type='button'>
        <ShoppingCartOutlinedIcon />
      </button>
    </div>
  );
};

export default HeaderSearchCart;
