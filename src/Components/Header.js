import React from 'react';
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
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <h1 className={cx('logo')}>DAY ONE</h1>
        <nav className={cx('nav')}>
          <FontAwesomeIcon icon={faHome} className={cx('icon')} />
          <FontAwesomeIcon icon={faPen} className={cx('icon')} />
          <FontAwesomeIcon icon={faMapMarkedAlt} className={cx('icon')} />
          <FontAwesomeIcon icon={faCalendar} className={cx('icon')} />
          <FontAwesomeIcon icon={faUser} className={cx('icon')} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
