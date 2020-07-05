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

const cx = classNames.bind(styles);

const Timeline = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faThLarge} className={cx('icon')} />
        <FontAwesomeIcon icon={faThList} className={cx('icon')} />
        <FontAwesomeIcon icon={faSquare} className={cx('icon')} />
      </div>
      <div className={cx('timelineListWrapper')}>
        <ul className={cx('timelineList')}>
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
          <TimeLineList />
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
