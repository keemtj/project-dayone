import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Map.module.scss';
import ReactMap from '../Components/ReactMap';
import DiarySublist from '../Components/DiarySublist';

const cx = classNames.bind(styles);

const Map = () => {
  // const [diaries, useDiaries] = useState([]);
  return (
    <main className={cx('map')}>
      <h1>지도</h1>
      <ReactMap />
      {/* <DiarySublist diaries={diaries} /> */}
    </main>
  );
};

export default Map;
