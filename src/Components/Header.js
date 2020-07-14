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
              <span className={cx('tooltip')}>홈</span>
            </NavLink>
            <NavLink to="/diary" activeClassName={cx('active')}>
              <FontAwesomeIcon icon={faPen} className={cx('icon')} />
              <span className={cx('tooltip')}>일기 작성</span>
            </NavLink>
            <NavLink to="/map" activeClassName={cx('active')}>
              <FontAwesomeIcon icon={faMapMarkedAlt} className={cx('icon')} />
              <span className={cx('tooltip')}>지도</span>
            </NavLink>
            <NavLink to="/calendar" activeClassName={cx('active')}>
              <FontAwesomeIcon icon={faCalendar} className={cx('icon')} />
              <span className={cx('tooltip')}>달력</span>
            </NavLink>
            <NavLink to="/mypage" activeClassName={cx('active')}>
              <FontAwesomeIcon icon={faUser} className={cx('icon')} />
              <span className={cx('tooltip')}>내 정보</span>
            </NavLink>

            {/* <span className={cx('tooltip')}>홈</span>
            </Link>
            <Link to="/diary">
              <FontAwesomeIcon icon={faPen} className={cx('icon')} />
              <span className={cx('tooltip')}>일기 작성</span>
            </Link>
            <Link to="/map">
              <FontAwesomeIcon icon={faMapMarkedAlt} className={cx('icon')} />
              <span className={cx('tooltip')}>지도</span>
            </Link>
            <Link to="/calendar">
              <FontAwesomeIcon icon={faCalendar} className={cx('icon')} />
              <span className={cx('tooltip')}>달력</span>
            </Link>
            <Link to="/mypage">
              <FontAwesomeIcon icon={faUser} className={cx('icon')} />
              <span className={cx('tooltip')}>내 정보</span>
            </Link> */}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
