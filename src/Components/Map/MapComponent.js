/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-new */
import React, { useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/MapComponent.module.scss';
import MapSearchForm from './MapSearchForm';
import MapSearchList from './MapSearchList';
import { MainContext } from '../../Context/MainContext';
import { MapContext } from '../../Context/MapContext';

const cx = classNames.bind(styles);

const { kakao } = window;

const MapComponent = () => {
  const mainContext = useContext(MainContext);
  const mapContext = useContext(MapContext);

  const { state } = mainContext;
  const { diaries } = state;
  const {
    mapState,
    setSublist,
    setPlaces,
    setPlacesVisible,
    setMessage,
  } = mapContext;

  // -----------------
  //
  const placesSearchCB = (data, status, pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      // displayPlaces(data);
      console.log('DATA: ', data);
      setMessage('');
      setPlaces(data);
      setPlacesVisible();
      // 페이지 번호를 표출합니다
      // displayPagination(pagination);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      setMessage('검색 결과가 존재하지 않습니다.');
      setPlaces([]);
    } else if (status === kakao.maps.services.Status.ERROR) {
      setMessage('검색 결과 중 오류가 발생했습니다.');
    }
  };
  // 37.5399238
  // 127.05075719999999

  const searchPlaces = (inputs) => {
    console.log('--------');
    console.log(new kakao.maps.services.Places());

    const ps = new kakao.maps.services.Places();

    console.log('your input: ', inputs);
    if (!inputs.replace(/^\s+|\s+$/g, '')) {
      setMessage('장소를 입력해주세요');
      return false;
    }
    ps.keywordSearch(inputs, placesSearchCB);
  };
  //
  // -------------

  const renderMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(0, 0),
      level: 6,
    };
    const map = new kakao.maps.Map(container, options);

    const locOptions = {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    const handleError = (err) => {
      console.warn('ERROR!');
    };
    // 현재위치
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          const locPosition = new kakao.maps.LatLng(lat, lng);

          map.setCenter(locPosition);
        },
        handleError,
        locOptions,
      );
    }

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    let selectedMarker = null;

    const normalImageSrc =
      'https://user-images.githubusercontent.com/67693474/87041096-ad4bd880-c22c-11ea-9f6b-c97dbc74a2d9.png';
    const clickImageSrc =
      'https://user-images.githubusercontent.com/67693474/87041692-935ec580-c22d-11ea-9fbf-772878fffa18.png';
    const normalImageSize = new kakao.maps.Size(50, 64);
    const overImageSize = new kakao.maps.Size(55, 70);
    const clickImageSize = new kakao.maps.Size(55, 70);
    const normalImageOption = {
      offset: new kakao.maps.Point(0, 0),
      shape: 'poly',
      coords:
        '26, 61, 29, 58, 31, 56, 34, 54, 37, 50, 39, 47, 43, 44, 46, 41, 47, 36, 48, 30, 49, 22, 47, 17, 45, 12, 40, 7, 35, 4, 28, 2, 22, 3, 16, 4, 10, 8, 7, 12, 4, 18, 2, 24, 2, 30, 3, 35, 5, 40, 8, 44, 11, 47, 14, 48, 17, 52, 19, 55, 22, 28',
    };
    const overImageOption = {
      offset: new kakao.maps.Point(0, 5),
    };
    const clickImageOption = {
      offset: new kakao.maps.Point(0, 5),
      shape: 'poly',
      coords:
        '29, 67, 33, 64, 36, 60, 39, 55, 40, 53, 45, 51, 49, 48, 52, 42, 52, 35, 53, 29, 54, 24, 52, 18, 48, 13, 44, 9, 37, 5, 31, 4, 25, 4, 18, 5, 13, 9, 9, 14, 6, 19, 5, 24, 3, 29, 4, 35, 5, 42, 8, 47, 12, 50, 16, 53, 20, 56, 22, 59, 25, 63',
    };

    const normalImage = new kakao.maps.MarkerImage(
      normalImageSrc,
      normalImageSize,
      normalImageOption,
    );
    const overImage = new kakao.maps.MarkerImage(
      normalImageSrc,
      overImageSize,
      overImageOption,
    );
    const clickImage = new kakao.maps.MarkerImage(
      clickImageSrc,
      clickImageSize,
      clickImageOption,
    );

    const makeOverListener = (marker) => () => {
      if (!selectedMarker || selectedMarker !== marker) {
        marker.setImage(overImage);
      }
    };

    const makeOutListener = (marker) => () => {
      if (!selectedMarker || selectedMarker !== marker) {
        marker.setImage(normalImage);
      }
    };

    const makeClickListener = (marker, lat, lng) => () => {
      if (!selectedMarker || marker !== selectedMarker) {
        !!selectedMarker && selectedMarker.setImage(normalImage);
        marker.setImage(clickImage);
      }
      selectedMarker = marker;
      setSublist(diaries, lat, lng);
    };

    const makeMarkers = (diaries) => {
      const markers = [];
      diaries.forEach((diary) => {
        const hasLocation = Object.keys(diary.location).length > 0;
        if (!hasLocation) return;

        const { lat, lng } = diary.location;

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(lat, lng),
          image: normalImage,
        });

        kakao.maps.event.addListener(
          marker,
          'click',
          makeClickListener(marker, lat, lng),
        );

        kakao.maps.event.addListener(
          marker,
          'mouseover',
          makeOverListener(marker),
        );

        kakao.maps.event.addListener(
          marker,
          'mouseout',
          makeOutListener(marker),
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

  return (
    <div className={cx('map')} id="map">
      <div className={cx('map-search-wrap')}>
        <MapSearchForm searchPlaces={searchPlaces} />
        <MapSearchList />
      </div>
    </div>
  );
};

export default React.memo(MapComponent);
