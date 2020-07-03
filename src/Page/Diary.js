import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Diary.module.scss';

const cx = classNames.bind(styles);

const Diary = () => {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('a11yHidden')}>다이어리</h1>
      <form action="#">
        <input type="text" className={cx('title')} />
        <textarea
          name="diaryContent"
          id="diaryContent"
          className={cx('diaryContent')}
          cols="30"
          rows="10"
        />
        <button type="submit" onClick={onClick}>
          완료
        </button>
      </form>
    </div>
  );
};

export default Diary;
