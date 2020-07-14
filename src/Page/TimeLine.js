import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLine.module.scss';
import SubRouter from '../Router/SubRouter';

const cx = classNames.bind(styles);

const Timeline = () => {
  const [timelineNav, setTimeLineNav] = useState('list'); // list, media

  const onClickNav = ({ target }) => {
    if (target.classList.length === 2) return;
    setTimeLineNav(target.className);
  };

  return (
    <div>
      {/* <div className={cx('timelineNav')}>
        <button
          type="button"
          onClick={onClickNav}
          className={cx('list', `${timelineNav === 'list' ? 'active' : ''}`)}
        >
          <FontAwesomeIcon icon={faThList} className={cx('icon')} />
        </button>
        <button
          type="button"
          onClick={onClickNav}
          className={cx('media', `${timelineNav === 'media' ? 'active' : ''}`)}
        >
          <FontAwesomeIcon icon={faThLarge} className={cx('icon')} />
        </button>
      </div>
      <ul className={cx('timelineWrapper')}>
        {diaries.map((diary) => (
          <TimeLineList
            key={diary.id}
            diary={diary}
            timelineNav={timelineNav}
          />
        ))}
      </ul> */}
      <div className={cx('timelineNav')}>
        <Link to="/timeline/list">
          <button
            type="button"
            onClick={onClickNav}
            className={cx('list', `${timelineNav === 'list' ? 'active' : ''}`)}
          >
            <FontAwesomeIcon icon={faThList} className={cx('icon')} />
          </button>
        </Link>
        <Link to="/timeline/media">
          <button
            type="button"
            onClick={onClickNav}
            className={cx(
              'media',
              `${timelineNav === 'media' ? 'active' : ''}`,
            )}
          >
            <FontAwesomeIcon icon={faThLarge} className={cx('icon')} />
          </button>
        </Link>
        <SubRouter />
      </div>
    </div>
  );
};

export default Timeline;
