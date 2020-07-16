/* eslint-disable camelcase */
import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../Style/MapSearchList.module.scss';
import { MapContext } from '../../Context/MapContext';

const cx = classNames.bind(styles);

const MapSearchList = () => {
  const mapContext = useContext(MapContext);
  const { mapState, setPlacesVisible, setPlacesHidden } = mapContext;
  const {
    places,
    message,
    pagination,
    pageList,
    currentPage,
    isSearchVisible,
    isPlacesVisible,
  } = mapState;

  const togglePlacesVisible = () => {
    isPlacesVisible ? setPlacesHidden() : setPlacesVisible();
  };
  console.log('===== MapSearchList ====');
  console.log('places: ', places);
  console.log('pagination: ', pagination);
  console.log('pageList: ', pageList);
  console.log('currentPage: ', currentPage);
  console.log('[isSearchVisible]: ', isSearchVisible);
  console.log('[isPlacesVisible]: ', isPlacesVisible);
  console.log('[result]: ', isSearchVisible && isPlacesVisible);
  return (
    <>
      {message && <p className={cx('map-search-msg')}>{message}</p>}
      {isPlacesVisible && (
        <div className={cx('map-search-menu')}>
          <ul className={cx('map-search-list')}>
            {places.map(
              (
                { id, place_name, road_address_name, address_name, phone },
                index,
              ) => {
                return (
                  <li key={id} className={cx('map-search-item')}>
                    <span className={cx('markerbg', `marker_${index + 1}`)} />
                    <div className={cx('info')}>
                      <h5 className={cx('place-name')}>{place_name}</h5>
                      {road_address_name && (
                        <p className={cx('road-address-name')}>
                          {road_address_name}
                        </p>
                      )}
                      {address_name && (
                        <p className={cx('address-name')}>{address_name}</p>
                      )}
                      {phone && <p className={cx('phone')}>{phone}</p>}
                    </div>
                  </li>
                );
              },
            )}
          </ul>
          <div className={cx('map-pagination')}>
            {pagination &&
              pageList.map((page) => (
                <a
                  key={page}
                  className={cx('page', { current: currentPage === page })}
                  onClick={() => {
                    pagination.gotoPage(page);
                  }}
                >
                  {page}
                </a>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MapSearchList;
