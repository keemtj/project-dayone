import React, { useState } from 'react';
import classNames from 'classnames/bind';
import {
  faThLarge,
  faThList,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Style/TimeLine.module.scss';
import TimeLineList from '../Components/TimeLineList';
import usePosts from '../Hook/usePosts';
// import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const Timeline = () => {
  const [fetchData] = usePosts();
  const [nav, setNav] = useState('card'); // card, list, media

  return (
    <div>
      <div className={cx('timelineNav')}>
        <button type="button" className={cx('active')}>
          <FontAwesomeIcon icon={faThLarge} className={cx('icon')} />
        </button>
        <button type="button" className={cx('')}>
          <FontAwesomeIcon icon={faThList} className={cx('icon')} />
        </button>
        <button type="button" className={cx('')}>
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
