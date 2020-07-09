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
  const { postsData } = state;
  console.log('diaries: ', postsData, typeof postsData);

  const [sublist, setSublist] = useState([]);

  const filterDiariesByLoc = (lat, lng) => {
    setSublist(
      postsData.filter(
        ({ location }) => location.lat === lat && location.lng === lng,
      ),
    );
  };

  return (
    <main className={cx('main')}>
      {/* <h1>지도</h1> */}
      <ReactMap
        className={cx('map')}
        diaries={postsData}
        filterDiariesByLoc={filterDiariesByLoc}
      />
      <DiarySublist sublist={sublist} />
    </main>
  );
};

export default Map;
