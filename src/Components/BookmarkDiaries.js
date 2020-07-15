import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from '../Page/Style/MyPage.module.scss';

const cx = classNames.bind(styles);

const BookmarkDiaries = ({ pageCtx }) => {
  const { bookmarked, onChangeBookmark } = pageCtx;
  return (
    <>
      <h3 className={cx('listTitle')}>
        <FontAwesomeIcon icon={faBookmark} className={cx('icon')} />
        Bookmarked Diaries
      </h3>
      <ul className={cx('diaryList')}>
        {bookmarked.map(({ id, title, date, imagePaths, isBookmarked }) => {
          return (
            <li key={id} className={cx('diary')}>
              <label htmlFor={`bookmark-${id}`} className={cx('bookmark')}>
                <input
                  id={`bookmark-${id}`}
                  type="checkbox"
                  checked={isBookmarked ? 'checked' : ''}
                  onChange={onChangeBookmark}
                />
                <span>
                  <FontAwesomeIcon icon={faBookmark} />
                </span>
              </label>
              <Link to={`/diaryViewer/${id}`}>
                <figure>
                  <div
                    style={{
                      backgroundImage: `url(${
                        imagePaths.length
                          ? imagePaths[0]
                          : 'https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png'
                      })`,
                    }}
                    className={cx('thumbnail')}
                    alt="thumbnail"
                  />
                  <figcaption className={cx('caption')}>
                    <span className={cx('diaryTitle')}>{title}</span>
                    <span className={cx('diaryDate')}>{date}</span>
                  </figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BookmarkDiaries;
