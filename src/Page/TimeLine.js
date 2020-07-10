import React from 'react';
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
  console.log(fetchData.diaries);

  return (
    <div>
      <div className={cx('timelineNav')}>
        <button type="button">
          <FontAwesomeIcon icon={faThLarge} className={cx('icon', 'active')} />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faThList} className={cx('icon')} />
        </button>
        <button type="button">
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
