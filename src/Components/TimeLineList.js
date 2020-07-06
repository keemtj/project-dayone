import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/TimeLineList.module.scss';

const cx = classNames.bind(styles);

const TimeLineList = () => {
  const isImage = false;

  return (
    <li className={cx('timelineList')}>
      <figure>
        <img
          src={
            isImage
              ? 'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg'
              : '#'
          }
          alt="thumbnail"
        />
        <figcaption>일기 제목</figcaption>
      </figure>
    </li>
  );
};

export default TimeLineList;
