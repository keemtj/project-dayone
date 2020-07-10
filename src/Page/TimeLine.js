import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThLarge,
  faThList,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLine.module.scss';
import TimeLineList from '../Components/TimeLineList';
import usePosts from '../Hook/usePosts';
// import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const Timeline = () => {
  const [fetchData] = usePosts();
  const [timelineNav, setTimeLineNav] = useState('card'); // card, list, media

  const onClickNav = (e) => {
    // 조건 재설정
    if (e.target.matches('path') || e.target.matches('svg')) return;
    setTimeLineNav(e.target.className);
  };

  return (
    <div>
      <div className={cx('timelineNav')}>
        <button
          type="button"
          onClick={onClickNav}
          className={cx('card', `${timelineNav === 'card' ? 'active' : ''}`)}
        >
          <FontAwesomeIcon icon={faThLarge} className={cx('icon')} />
        </button>
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
          <FontAwesomeIcon icon={faSquare} className={cx('icon')} />
        </button>
      </div>
      <ul className={cx('timelineWrapper')}>
        {fetchData.diaries.map((diary) => (
          <TimeLineList key={diary.id} diary={diary} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
