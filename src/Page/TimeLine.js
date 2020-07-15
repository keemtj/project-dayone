import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLine.module.scss';
import SubRouter from '../Router/SubRouter';

const cx = classNames.bind(styles);

const Timeline = () => {
  const { pathname } = useLocation();

  return (
    <main>
      <div className={cx('timelineNav')}>
        <aside className={cx('aside')}>
          <div className={cx('profile')}>프로필 사진 박스</div>
          <div className={cx('tagBox')}>태그 박스</div>
        </aside>
        <div className={cx('nav')}>
          <NavLink
            to="/timeline/list"
            activeClassName={cx('active')}
            className={cx(pathname.includes('/timeline/media') ? '' : 'active')}
          >
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
