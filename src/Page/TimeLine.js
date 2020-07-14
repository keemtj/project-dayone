import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLine.module.scss';
import SubRouter from '../Router/SubRouter';

const cx = classNames.bind(styles);

const Timeline = () => {
  return (
    <main>
      <div className={cx('timelineNav')}>
        <div className={cx('nav')}>
          <NavLink to="/timeline/list" activeClassName={cx('active')}>
            <FontAwesomeIcon icon={faThList} className={cx('icon')} />
            {/* <span className={cx('tooltip')}>리스트</span> */}
          </NavLink>
          <NavLink to="/timeline/media" activeClassName={cx('active')}>
            <FontAwesomeIcon icon={faThLarge} className={cx('icon')} />
            {/* <span className={cx('tooltip')}>사진</span> */}
          </NavLink>
        </div>
        <SubRouter />
      </div>
    </main>
  );
};

export default Timeline;
