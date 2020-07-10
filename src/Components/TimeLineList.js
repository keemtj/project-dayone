import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/TimeLineList.module.scss';

const cx = classNames.bind(styles);

const TimeLineList = ({ diary }) => {
  const { title, content, date, imagePaths } = diary;
  console.log(imagePaths);
  console.log(content, date);

  return (
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
  );
};

export default TimeLineList;
