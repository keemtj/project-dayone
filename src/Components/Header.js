import React from 'react';
import { Link } from 'react-router-dom';
import {
  faHome,
  faPen,
  faMapMarkedAlt,
  faCalendar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Style/Header.module.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">DAY ONE</h1>
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link to="/map">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
        </Link>
        <Link to="/calendar">
          <FontAwesomeIcon icon={faCalendar} className="icon" />
        </Link>
        <Link to="/diary">
          <FontAwesomeIcon icon={faPen} className="icon" />
        </Link>
        <Link to="/mypage">
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
