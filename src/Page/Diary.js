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
    </div>
  );
};

export default Diary;
