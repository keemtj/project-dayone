import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/DiaryTagBox.module.scss';

const cx = classNames.bind(styles);

const DiaryTagBox = () => {
  return (
    <div className={cx('tagBox')}>
      <input type="text" placeholder="태그를 입력하세요" />
      <button type="button">추가</button>
    </div>
  );
};

export default DiaryTagBox;
