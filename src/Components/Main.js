import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Main.module.scss';

const cx = classNames.bind(styles);

const Main = () => {
  return <main className={cx('main')} />;
};

export default Main;
