import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Style/ReactMap.module.scss';

const cx = classNames.bind(styles);

const { kakao } = window;

console.log('kakao: ', kakao);
console.log('kakao.map: ', kakao.map);
const ReactMap = () => {
  useEffect(() => {
    kakao.maps.load(() => {
      const el = document.getElementById('map');
      console.log('el: ', el);
      let map = new kakao.maps.Map(el, {
        center: new kakao.maps.Coords(523951.25, 1085073.75),
      });
    });
  }, []);

  return <div className={cx('react-map')} id="map" />;
};

export default ReactMap;
