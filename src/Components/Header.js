import React from 'react';
import { useRouteMatch, Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import {
  faHome,
  faPen,
  faMapMarkedAlt,
  faCalendar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Style/Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const match = useRouteMatch({
    path: '/diary',
  });
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <h1 className={cx('logo')}>
          <Link to="/">DAY ONE</Link>
        </h1>
        {match ? (
          <nav match={match} />
        ) : (
          <nav className={cx('nav')}>
            <NavLink to="/" activeClassName={cx('active')} exact>
              <FontAwesomeIcon icon={faHome} className={cx('icon')} />
            </NavLink>
            <NavLink to="/diary" activeClassName={cx('active')}>
              <FontAwesomeIcon icon={faPen} className={cx('icon')} />
            </NavLink>
            <NavLink to="/map" activeClassName={cx('active')}>
              <FontAwesomeIcon icon={faMapMarkedAlt} className={cx('icon')} />
            </NavLink>
            <NavLink to="/calendar" activeClassName={cx('active')}>
              <FontAwesomeIcon icon={faCalendar} className={cx('icon')} />
            </NavLink>
            <NavLink to="/mypage" activeClassName={cx('active')}>
              <FontAwesomeIcon icon={faUser} className={cx('icon')} />
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
