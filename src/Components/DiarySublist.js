import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/DiarySublist.module.scss';

const cx = classNames.bind(styles);

const DiarySublist = () => {
  return (
    <ul className={cx('diaryList')}>
      <div className={cx('addBtn')}>+</div>
      <li className={cx('diary')}>
        <img
          src="https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg"
          alt="thumbnail"
          className={cx('thumbnail')}
        />
        <div className={cx('info')}>
          <h2 className={cx('title')}>diary title</h2>
          <p className={cx('details')}>date and location</p>
        </div>
      </li>
      <li className={cx('diary')}>
        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/19/04/blank-diary-were-pages-and-pencil-vector-4351904.jpg"
          alt="thumbnail"
          className={cx('thumbnail')}
        />
        <div className={cx('info')}>
          <h2 className={cx('title')}>diary title</h2>
          <p className={cx('details')}>date and location</p>
        </div>
      </li>
      <li className={cx('diary')}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeX3VACsADLYWqFzQ6KDo1Eu_M5L85cP0o-Q&usqp=CAU"
          alt="thumbnail"
          className={cx('thumbnail')}
        />
        <div className={cx('info')}>
          <h2 className={cx('title')}>diary title</h2>
          <p className={cx('details')}>date and location</p>
        </div>
      </li>
      <li className={cx('diary')}>
        <img
          src="https://dictionary.cambridge.org/ko/images/thumb/diary_noun_002_10619.jpg?version=5.0.102"
          alt="thumbnail"
          className={cx('thumbnail')}
        />
        <div className={cx('info')}>
          <h2 className={cx('title')}>diary title</h2>
          <p className={cx('details')}>date and location</p>
        </div>
      </li>
    </ul>
  );
};

export default DiarySublist;
