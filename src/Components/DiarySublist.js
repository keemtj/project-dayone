import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/DiarySublist.module.scss';
import { CalendarContext } from '../Context/CalendarContext';

const cx = classNames.bind(styles);

const DiarySublist = ({ mapList }) => {
  const calCtx = React.useContext(CalendarContext);
  const calendarList = calCtx.calendarState.sublist;
  const subList = calendarList || mapList;

  return (
    <ul className={cx('diaryList')}>
      <div className={cx('addBtn')}>+</div>
      {subList.map(({ id, title, content, imagePaths }) => {
        return (
          <li key={id} className={cx('diary')}>
            <img
              src={
                imagePaths.length
                  ? imagePaths[0]
                  : 'https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png'
              }
              alt="thumbnail"
              className={cx('thumbnail')}
            />
            <div className={cx('info')}>
              <h2 className={cx('title')}>{title}</h2>
              <p className={cx('details')}>{content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DiarySublist;
