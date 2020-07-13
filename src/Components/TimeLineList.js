/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { MainContext } from '../Context/MainContext';
import styles from './Style/TimeLineList.module.scss';

const cx = classNames.bind(styles);

const TimeLineList = ({ diary, timelineNav }) => {
  const { id, title, content, date, imagePaths, isBookmarked } = diary;
  const context = useContext(MainContext);
  const { patchBookmark } = context;

  const onChangeBookmark = (e) => {
    patchBookmark(id, e.target.checked);
    console.log('[timeline] diary.id =', id);
    console.log('[timeline] e.target.checked =', e.target.checked);
  };

  return (
    <li className={cx(`timeline-${timelineNav}`)}>
      {console.log('current bookmark checked:', isBookmarked)}
      <input
        id={id}
        type="checkbox"
        checked={isBookmarked ? 'checked' : ''}
        onChange={onChangeBookmark}
        // onChange={patchBookmark}
      />
      <label htmlFor={id}>
        <span>
          <FontAwesomeIcon icon={faBookmark} className={cx('bookmarkIcon')} />
        </span>
      </label>
      {/* <button
        type="button"
        className={cx('iconBtn')}
        onClick={onChangeBookmark}
      >
        {isBookmarked ? (
          <FontAwesomeIcon icon={faBookmark} className={cx('bookmarked')} />
        ) : (
          <FontAwesomeIcon icon={faBookmark} className={cx('notBookmarked')} />
        )}
      </button> */}
      <Link to={`/diaryViewer/${id}`}>
        <figure>
          <div
            className={cx('thumbnail')}
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
          <figcaption>
            <div className={cx('diaryTitle')}>
              {isBookmarked ? 'checked' : 'unchecked'}
              {timelineNav === 'media' ? '' : title}
            </div>
            <div className={cx('diaryDate')}>
              {timelineNav === 'list' && date}
            </div>
            <p className={cx('diaryContent')}>
              {timelineNav === 'card' || timelineNav === 'media'
                ? null
                : content}
            </p>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default TimeLineList;
