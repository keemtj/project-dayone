import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Main.module.scss';
import MainRouter from '../Router/MainRouter';

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <main className={cx('main')}>
      <MainRouter />
    </main>
  );
};

export default Main;
