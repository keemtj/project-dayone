/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLineList.module.scss';
import { MainContext } from '../Context/MainContext';
import image1 from '../Util/asset/image1.jpg';
import image2 from '../Util/asset/image2.jpg';
import image3 from '../Util/asset/image3.jpg';
import image4 from '../Util/asset/image4.jpg';

const cx = classNames.bind(styles);

const TimeLineList = () => {
  const context = useContext(MainContext);
  const { state, patchBookmark } = context;
  const { diaries } = state;
  const images = [image1, image2, image3, image4];

  const onChangeBookmark = ({ target }) => {
    const id = +target.attributes.id.nodeValue;
    patchBookmark(id, target.checked);
  };

  return (
    <ul className={cx('timelineWrapper')}>
      {diaries.map((diary) => (
        <li key={diary.id} className={cx('timelineList')}>
          <Link
            to={`/diaryViewer/${diary.id}`}
            style={{ textDecoration: 'none' }}
          >
            <figure>
              <img
                className={cx('thumbnail')}
                src={
                  diary.imagePaths.length
                    ? diary.imagePaths[0]
                    : images[diary.id - 1]
                }
                alt="https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png"
              />
              <figcaption>
                <div className={cx('title')}>{diary.title}</div>
                <div className={cx('date')}>
                  {diary.date.split('-').join('. ')}
                </div>
                <p className={cx('content')}>{diary.content}</p>
              </figcaption>
            </figure>
          </Link>
          <input
            id={diary.id}
            type="checkbox"
            checked={diary.isBookmarked ? 'checked' : ''}
            onChange={onChangeBookmark}
          />
          <label htmlFor={diary.id}>
            <span>
              <FontAwesomeIcon
                icon={faBookmark}
                className={cx('bookmarkIcon')}
              />
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TimeLineList;
