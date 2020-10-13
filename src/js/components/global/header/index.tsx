import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useRouter from '@components/global/useRouter';

import './style.scss';

import nikeLogo from '../../../../media/nike-logo.svg';
import cartIcon from '../../../../media/icons/shopping-cart.svg';
import searchIcon from '../../../../media/icons/search-icon.svg';

const Header = () => {
  const header = useRef<HTMLElement>(null);
  const navbar = useRef<HTMLDivElement>(null);
  const navbar_line = useRef<HTMLDivElement>(null);
  const { pathname } = useRouter();

  const [search_value, setSearchValue] = useState<string>('');

  useEffect(() => {
    if (pathname === '/' && navbar_line && navbar_line.current) {
      navbar_line.current.style.width = `${0}px`;
      navbar_line.current.style.transform = `translateX(${0}px)`;
    }

    if (pathname !== '/' && header && header.current) {
      header.current.classList.add('fixed-header');

      if (navbar && navbar.current) {
        let link_width = 0;
        let link_pos = 0;

        Array.from(navbar.current.children).forEach(element => {
          if (element.classList.contains('active-page')) {
            link_width = element.getBoundingClientRect().width;
            link_pos = element.getBoundingClientRect().x;
          }
        });

        if (navbar_line && navbar_line.current && navbar && navbar.current) {
          navbar_line.current.style.width = `${link_width}px`;
          navbar_line.current.style.transform = `translateX(${
            link_pos - navbar.current.getBoundingClientRect().x
          }px)`;
        }
      }
    }
  }, [pathname]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const string_value = event.target.value;

    setSearchValue(string_value);

    event.stopPropagation();
  };

  const hoverAnimation = (event: React.MouseEvent<HTMLAnchorElement | HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (target.tagName === 'A' && event.type === 'mouseover') {
      const link_width = target.getBoundingClientRect().width;
      const link_pos = target.getBoundingClientRect().x;

      if (navbar_line && navbar_line.current && navbar && navbar.current) {
        navbar_line.current.style.width = `${link_width}px`;
        navbar_line.current.style.transform = `translateX(${
          link_pos - navbar.current.getBoundingClientRect().x
        }px)`;
      }
    }

    if (
      navbar &&
      navbar.current &&
      event.currentTarget.className === navbar.current.className &&
      event.type === 'mouseleave'
    ) {
      let link_width = 0;
      let link_pos = 0;

      Array.from(event.currentTarget.children).forEach(element => {
        if (element.classList.contains('active-page')) {
          link_width = element.getBoundingClientRect().width;
          link_pos = element.getBoundingClientRect().x;
        }
      });

      if (navbar_line && navbar_line.current && navbar && navbar.current) {
        navbar_line.current.style.width = `${link_width}px`;
        navbar_line.current.style.transform = `translateX(${
          link_pos - navbar.current.getBoundingClientRect().x
        }px)`;
      }
    }

    event.stopPropagation();
  };

  return (
    <header id='main-header' className='position-relative' ref={header}>
      <Link to='/' id='nike-logo'>
        <img src={nikeLogo} alt='nike-logo' />
      </Link>

      <nav className='position-absolute'>
        <div
          className='navbar-container position-relative'
          ref={navbar}
          onMouseOver={hoverAnimation}
          onMouseLeave={hoverAnimation}
        >
          <div className='line position-absolute' ref={navbar_line}></div>
          <NavLink activeClassName='active-page' to='/men'>
            Men
          </NavLink>
          <NavLink activeClassName='active-page' to='/women'>
            Women
          </NavLink>
          <NavLink activeClassName='active-page' to='/clothing'>
            Clothing
          </NavLink>
          <NavLink activeClassName='active-page' to='/sneakers'>
            Sneakers
          </NavLink>
        </div>
      </nav>

      <div className='interactive-cart-navbar'>
        <div className='input-box position-relative'>
          <div className='input-image position-absolute'>
            <img src={searchIcon} alt='search icon' />
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
          <img src={cartIcon} alt='cart icon' />
        </button>
      </div>
    </header>
  );
};

export default Header;
