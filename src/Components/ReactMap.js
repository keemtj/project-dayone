/* eslint-disable no-new */
import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Style/ReactMap.module.scss';
// eslint-disable-next-line no-multi-assign

const cx = classNames.bind(styles);

const diaries = [
  {
    _id: 1,
    id: 1,
    title: 'Diary Title 1',
    content: 'This is diary 1',
    date: '2020/03/02',
    location: { lat: 37.62197524055062, lng: 127.16017523675508 },
    imagePaths: [
      'https://dictionary.cambridge.org/ko/images/thumb/diary_noun_002_10619.jpg?version=5.0.102',
      'https://dictionary.cambridge.org/ko/images/thumb/diary_noun_002_10619.jpg?version=5.0.102',
    ],
    isBookmarked: true,
  },
  {
    _id: 1,
    id: 2,
    title: 'Diary Title 2',
    content: 'This is diary 2',
    date: '2020/04/17',
    location: { lat: 37.620842424005616, lng: 127.1583774403176 },
    imagePaths: [],
    isBookmarked: false,
  },
  {
    _id: 1,
    id: 3,
    title: 'Diary Title 3',
    content: 'This is diary 3',
    date: '2020/04/21',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 2,
    id: 4,
    title: 'Diary Title 4',
    content: 'This is diary 4',
    date: '2020/04/25',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 3,
    id: 5,
    title: 'Diary Title 5',
    content: 'This is diary 5',
    date: '2020/04/28',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 4,
    id: 6,
    title: 'Diary Title 6',
    content: 'This is diary 6',
    date: '2020/05/01',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 2,
    id: 7,
    title: 'Diary Title 7',
    content: 'This is diary 7',
    date: '2020/05/02',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 1,
    id: 8,
    title: 'Diary Title 8',
    content: 'This is diary 8',
    date: '2020/06/01',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 3,
    id: 9,
    title: 'Diary Title 9',
    content: 'This is diary 9',
    date: '2020/07/01',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 4,
    id: 10,
    title: 'Diary Title 10',
    content: 'This is diary 10',
    date: '2020/07/04',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
  },
  {
    _id: 4,
    id: 11,
    title: 'Diary Title 11',
    content: 'This is diary 11',
    date: '2020/07/05',
    location: { lat: 37.624915253753194, lng: 127.15122688059974 },
    imagePaths: [
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
      'https://previews.123rf.com/images/rawpixel/rawpixel1611/rawpixel161125151/111072573-diary-writing-concept.jpg',
    ],
    isBookmarked: false,
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

    const generateMarkerArr = (diaries) => {
      let markerArr = [];

      diaries.forEach(({ location }) => {
        const { lat, lng } = location;
        if (!markerArr.length) {
          markerArr.push({
            count: 1,
            lat,
            lng,
          });
          return;
        }
        markerArr.forEach((marker, i) => {
          if (lat === marker.lat && lng === marker.lng) {
            marker.count += 1;
            return;
          }
          if (i + 1 === markerArr.length) {
            markerArr.push({
              count: 1,
              lat,
              lng,
            });
          }
        });
      });

      return markerArr;
    };

    const getMarkerSize = (count) => {
      let size = 0;
      if (count < 3) size = 80;
      else if (count >= 3 && count < 5) size = 110;
      else if (count >= 5 && count < 7) size = 140;
      else {
        size = 170;
      }
      return new kakao.maps.Size(size, size);
    };

    // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    const getMarkerImage = (count) => {
      const imageSize = getMarkerSize(count);
      const imageSrc =
        'https://user-images.githubusercontent.com/67693474/86579099-cdbf2d00-bfb7-11ea-9c6e-177382b49033.png';
      const imageOption = { offset: new kakao.maps.Point(27, 69) };
      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      return markerImage;
    };

    const markers = generateMarkerArr(diaries).map((marker) => {
      const markerImage = getMarkerImage(marker.count);
      return new kakao.maps.Marker({
        position: new kakao.maps.LatLng(marker.lat, marker.lng),
        image: markerImage,
      });
    });

    const clusterer = new kakao.maps.MarkerClusterer({
      map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 6, // 클러스터 할 최소 지도 레벨
    });

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
