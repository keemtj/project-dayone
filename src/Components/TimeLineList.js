import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Style/TimeLineList.module.scss';

const cx = classNames.bind(styles);

const TimeLineList = ({ diary }) => {
  const { id, title, content, date, imagePaths } = diary;
  console.log(content, date);

  return (
    <li className={cx('timelineList')}>
      <Link to={`/diaryViewer/${id}`}>
        <figure>
          <div
            className={cx('imageWrapper')}
            style={{
              backgroundImage: `url(
                ${
                  imagePaths.length
                    ? imagePaths[0]
                    : 'https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png'
                }
                )`,
            }}
          />
          <figcaption>{title}</figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default TimeLineList;
