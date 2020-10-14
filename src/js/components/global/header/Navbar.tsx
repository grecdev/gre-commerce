import React, { useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import { useRouter } from '@helpers';

import { connect } from 'react-redux';
import { setLinePosX, setLineWidth } from '@actions';
import { IInitialState } from '@reducers/headerReducer';

import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface INavbarProps {
  setLineWidth: (width: number) => void;
  setLinePosX: (posX: number) => void;
  width: number;
  posX: number;
}

const useStyles = makeStyles<Theme, INavbarProps>(theme => ({
  navbar: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    '& a': {
      textTransform: 'uppercase',
      padding: '0 1rem'
    }
  },
  navbar_container: {
    color: theme.palette.common.white,
    overflow: 'hidden',
    padding: '0.3rem 0'
  },
  line: {
    height: '3px',
    background: theme.palette.secondary.main,
    bottom: 0,
    transition: 'width 250ms ease-in-out, transform 250ms ease-in-out',
    width: props => props.width,
    transform: props => `translateX(${props.posX}px)`
  }
}));

const Navbar: React.FC<INavbarProps> = (props: INavbarProps) => {
  const navbar = useRef<HTMLDivElement>(null);
  const navbar_line = useRef<HTMLDivElement>(null);
  const { pathname } = useRouter();

  const { setLineWidth, setLinePosX } = props;

  const classes = useStyles(props);

  useEffect(() => {
    if (pathname === '/') {
      setLineWidth(0);
      setLinePosX(0);
    }

    if (pathname !== '/' && navbar && navbar.current) {
      let link_width = 0;
      let link_pos = 0;

      Array.from(navbar.current.children).forEach(element => {
        if (navbar && navbar.current && element.classList.contains('active-page')) {
          link_width = element.getBoundingClientRect().width;
          link_pos = element.getBoundingClientRect().x - navbar.current.getBoundingClientRect().x;
        }
      });

      setLineWidth(link_width);
      setLinePosX(link_pos);
    }
  }, [pathname]);

  const hoverAnimation = (event: React.MouseEvent<HTMLAnchorElement | HTMLElement>) => {
    const target = event.target as HTMLElement;

    if (navbar && navbar.current && target.tagName === 'A' && event.type === 'mouseover') {
      const link_width: number = target.getBoundingClientRect().width;
      const link_pos: number =
        target.getBoundingClientRect().x - navbar.current.getBoundingClientRect().x;

      setLineWidth(link_width);
      setLinePosX(link_pos);
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
        if (navbar && navbar.current && element.classList.contains('active-page')) {
          link_width = element.getBoundingClientRect().width;
          link_pos = element.getBoundingClientRect().x - navbar.current.getBoundingClientRect().x;
        }
      });

      setLineWidth(link_width);
      setLinePosX(link_pos);
    }

    event.stopPropagation();
  };

  return (
    <nav className={`position-absolute ${classes.navbar}`}>
      <div
        className={`position-relative ${classes.navbar_container}`}
        ref={navbar}
        onMouseOver={hoverAnimation}
        onMouseLeave={hoverAnimation}
      >
        <div className={`position-absolute ${classes.line}`} ref={navbar_line}></div>
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
  );
};

interface IMapStateToProps {
  header: IInitialState;
}

const mapStateToProps = (state: IMapStateToProps) => {
  const { header } = state;

  return {
    width: header.width,
    posX: header.posX
  };
};

export default connect(mapStateToProps, { setLineWidth, setLinePosX })(Navbar);
