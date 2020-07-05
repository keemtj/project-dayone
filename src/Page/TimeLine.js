import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import {
  faThLarge,
  faThList,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import styles from './Style/TimeLine.module.scss';
import TimeLineList from '../Components/TimeLineList';
import diaryApi from '../Api/diaryApi';

const cx = classNames.bind(styles);

const Timeline = () => {
  const getData = async () => {
    const data = await axios.get('api/users');
    console.log(data.data);
  };

  useEffect(() => {
    // getData();
    diaryApi.getDiaries();
  }, []);

  return (
    <div>
      <div className={cx('timelineNav')}>
        <FontAwesomeIcon icon={faThLarge} className={cx('icon', 'active')} />
        <FontAwesomeIcon icon={faThList} className={cx('icon')} />
        <FontAwesomeIcon icon={faSquare} className={cx('icon')} />
      </div>
      <ul className={cx('timelineWrapper')}>
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
  );
};

export default Timeline;
