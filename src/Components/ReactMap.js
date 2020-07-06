/* eslint-disable no-new */
import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Style/ReactMap.module.scss';
// eslint-disable-next-line no-multi-assign

const cx = classNames.bind(styles);

export const markerdata = [
  {
    title: '콜드스퀘어',
    lat: 37.62197524055062,
    lng: 127.16017523675508,
  },
  {
    title: '하남돼지집',
    lat: 37.620842424005616,
    lng: 127.1583774403176,
  },
  {
    title: '수유리우동',
    lat: 37.624915253753194,
    lng: 127.15122688059974,
  },
  {
    title: '맛닭꼬',
    lat: 37.62456273069659,
    lng: 127.15211256646381,
  },
];

const { kakao } = window;

const ReactMap = () => {
  const renderMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.62197524055062, 127.16017523675508),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커이미지의 주소입니다
    const imageSrc =
      'https://user-images.githubusercontent.com/67693474/86530917-ea942b80-bef7-11ea-9f31-48436bc2ce39.png';
    const imageSize = new kakao.maps.Size(100, 100); // 마커이미지의 크기입니다
    const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );

    const clusterer = new kakao.maps.MarkerClusterer({
      map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 6, // 클러스터 할 최소 지도 레벨
    });

    const markers = markerdata.map((el) => {
      return new kakao.maps.Marker({
        position: new kakao.maps.LatLng(el.lat, el.lng),
        image: markerImage,
      });
    });

    // 클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);
  };

  useEffect(() => {
    kakao.maps.load(() => {
      renderMap();
    });
  }, []);

  return <div className={cx('react-map')} id="map" />;
};

export default ReactMap;
