import React from 'react';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import DiaryViewer from '../Page/DiaryViewer';
import styles from './Style/TimeLineList.module.scss';

const cx = classNames.bind(styles);

const TimeLineList = ({ diary }) => {
  const { id, title, content, date, imagePaths } = diary;
  console.log(content, date);

  return (
    <Link to={`/diaryViewer/${id}`}>
      <li className={cx('timelineList')}>
        <figure>
          <img
            src={
              imagePaths.length !== 0
                ? imagePaths[0]
                : 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'
            }
            alt=""
          />
          <figcaption>{title}</figcaption>
        </figure>
      </li>
      <Route path="/diaryViewer/:id" component={DiaryViewer} />
    </Link>
  );
};

export default TimeLineList;
