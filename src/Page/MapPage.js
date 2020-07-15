import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Map.module.scss';
import DiarySublist from '../Components/DiarySublist';
import MapComponent from '../Components/Map/MapComponent';

const cx = classNames.bind(styles);

const MapPage = () => {
  return (
    <main className={cx('main')}>
      <MapComponent />
      <DiarySublist />
    </main>
  );
};

export default MapPage;
