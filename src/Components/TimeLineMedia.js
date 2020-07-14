/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLineMedia.module.scss';
import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const TimeLineMedia = () => {
  const context = useContext(MainContext);
  const { state, patchBookmark } = context;
  const { diaries } = state;

  const onChangeBookmark = ({ target }) => {
    const id = +target.attributes.id.nodeValue;
    patchBookmark(id, target.checked);
  };

  return (
    <ul className={cx('timelineWrapper')}>
      {diaries.map((diary) => (
        <li key={diary.id} className={cx('timelineMedia')}>
          <Link to={`/diaryViewer/${diary.id}`}>
            <img
              className={cx('thumbnail')}
              src={
                diary.imagePaths.length
                  ? diary.imagePaths[0]
                  : 'https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png'
              }
              alt="다이어리 첫번째 사진"
            />
          </Link>
          {/* 마우스 hover시 보여지는 부분 */}
          <div className={cx('overwrap')}>
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
            <Link
              to={`/diaryViewer/${diary.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className={cx('diaryInfo')}>
                <div className={cx('title')}>{diary.title}</div>
                <div className={cx('date')}>{diary.date}</div>
              </div>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TimeLineMedia;
