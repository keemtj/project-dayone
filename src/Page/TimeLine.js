import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThLarge,
  faThList,
  faTags,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLine.module.scss';
import SubRouter from '../Router/SubRouter';
import { MainContext } from '../Context/MainContext';
const cx = classNames.bind(styles);

const Timeline = () => {
  const { pathname } = useLocation();
  const context = useContext(MainContext);
  const { state } = context;
  const { userData } = state;
  const { userId, pic, msg } = userData;

  return (
    <main>
      <div className={cx('timelineNav')}>
        <aside className={cx('aside')}>
          <div className={cx('profile')}>
            <div
              className={cx('profilePhoto')}
              style={{
                backgroundImage: `url(
                ${pic})`,
              }}
            />
            <div className={cx('profileUserId')}>{userId}</div>
            <div className={cx('profileMsg')}>{msg}</div>
          </div>
          <div className={cx('tagBox')}>
            <FontAwesomeIcon icon={faTags} className={cx('icon')} />
            <span className={cx('tagBoxTitle')}>TAG</span>
            <ul className={cx('tagListWrapper')}>
              <li className={cx('tag')}>
                <FontAwesomeIcon icon={faHashtag} className={cx('icon')} />
                <span>스터디</span>
              </li>
              <li className={cx('tag')}>
                <FontAwesomeIcon icon={faHashtag} className={cx('icon')} />
                <span>프론트엔드</span>
              </li>
              <li className={cx('tag')}>
                <FontAwesomeIcon icon={faHashtag} className={cx('icon')} />
                <span>리액트</span>
              </li>
            </ul>
          </div>
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
