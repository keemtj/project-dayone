import React from 'react';
import {
  faHome,
  faPen,
  faMapMarkedAlt,
  faCalendar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './Style/Header.module.scss';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">DAY ONE</h1>
      <nav>
        <FontAwesomeIcon icon={faHome} className="icon" />
        <FontAwesomeIcon icon={faPen} className="icon" />
        <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
        <FontAwesomeIcon icon={faCalendar} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </nav>
    </header>
  );
};

export default Header;
