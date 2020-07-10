import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Map.module.scss';
import ReactMap from '../Components/ReactMap';
import DiarySublist from '../Components/DiarySublist';
import { testContext } from '../Context/testContext';
const cx = classNames.bind(styles);
const Map = () => {
  const context = React.useContext(testContext);
  const { state } = context;
  const { diaries } = state;
  const [mapList, setMaplist] = useState([]);
  const filterDiariesByLoc = (lat, lng) => {
    setMaplist(
      diaries.filter(
        ({ location }) => location.lat === lat && location.lng === lng,
      ),
    );
  };
  return (
    <main className={cx('main')}>
      {/* <h1>지도</h1> */}
      <ReactMap
        className={cx('map')}
        diaries={diaries}
        filterDiariesByLoc={filterDiariesByLoc}
      />
      <DiarySublist mapList={mapList} />
    </main>
  );
};
export default Map;
