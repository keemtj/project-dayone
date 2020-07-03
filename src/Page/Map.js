import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Map.module.scss';
import ReactMap from '../Components/ReactMap';

const cx = classNames.bind(styles);

const Map = () => {
  return (
    <main className={cx('map')}>
      <h1>지도</h1>
      <p>지도, 어디서 기록한건지 지도에서 찾아보자</p>
      <ReactMap />
    </main>
  );
};

export default Map;
