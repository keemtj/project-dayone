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
        <FontAwesomeIcon icon={faThLarge} className={cx('icon', 'active')} />
        <FontAwesomeIcon icon={faThList} className={cx('icon')} />
        <FontAwesomeIcon icon={faSquare} className={cx('icon')} />
      </div>
      <ul className={cx('timelineWrapper')}>
        {fetchData.diaries.map((diary) => (
          <TimeLineList key={diary.id} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
