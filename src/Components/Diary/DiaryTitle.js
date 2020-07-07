import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/DiaryTitle.module.scss';

const cx = classNames.bind(styles);

const DiaryTitle = () => {
  return (
    <input className={cx('diaryTitle')} type="text" placeholder="일기 제목" />
  );
};

export default DiaryTitle;
