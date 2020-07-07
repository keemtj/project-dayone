/* eslint-disable no-shadow */
/* eslint-disable no-new */
import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Style/ReactMap.module.scss';

const cx = classNames.bind(styles);

const { kakao } = window;

const ReactMap = ({ diaries, filterDiariesByLoc }) => {
  const renderMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.62197524055062, 127.16017523675508),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const imageSrc =
      'https://user-images.githubusercontent.com/67693474/86579099-cdbf2d00-bfb7-11ea-9c6e-177382b49033.png';
    const imageSize = new kakao.maps.Size(100, 100); // 마커이미지의 크기입니다
    const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    );

    const makeOverListener = (map, marker, infowindow) => () => {
      infowindow.open(map, marker);
    };

    const makeOutListener = (infowindow) => () => {
      infowindow.close();
    };

    const makeClickListener = (lat, lng) => () => {
      filterDiariesByLoc(lat, lng);
    };

    const makeMarkers = (diaries) => {
      const markers = [];
      diaries.forEach((diary) => {
        const { lat, lng } = diary.location;

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(lat, lng),
          image: markerImage,
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: diary.title,
        });

        kakao.maps.event.addListener(
          marker,
          'click',
          makeClickListener(lat, lng),
        );

        kakao.maps.event.addListener(
          marker,
          'mouseover',
          makeOverListener(map, marker, infowindow),
        );
        kakao.maps.event.addListener(
          marker,
          'mouseout',
          makeOutListener(infowindow),
        );

        markers.push(marker);
      });
      return markers;
    };

    const clusterer = new kakao.maps.MarkerClusterer({
      map,
      averageCenter: true,
      minLevel: 6,
    });

    const markers = makeMarkers(diaries);
    clusterer.addMarkers(markers);
  };

  useEffect(() => {
    kakao.maps.load(() => {
      renderMap();
    });
  }, []);

  return <div className={cx('map')} id="map" />;
};

export default ReactMap;
