import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/DiaryTagBox.module.scss';

const cx = classNames.bind(styles);

const DiaryTagBox = () => {
  return <div className={cx('tagBox')}>test</div>;
};

export default DiaryTagBox;
