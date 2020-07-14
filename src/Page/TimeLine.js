import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLine.module.scss';
import TimeLineList from '../Components/TimeLineList';
// import usePosts from '../Hook/usePosts';
import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const Timeline = () => {
  const context = useContext(MainContext);
  const { state } = context;
  const { diaries } = state;
  const [timelineNav, setTimeLineNav] = useState('list'); // list, media

  const onClickNav = ({ target }) => {
    if (target.classList.length === 2) return;
    setTimeLineNav(target.className);
  };

  return (
    <div>
      <div className={cx('timelineNav')}>
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
      </ul>
    </div>
  );
};

export default Timeline;
