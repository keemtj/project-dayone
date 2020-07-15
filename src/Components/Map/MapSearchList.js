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
  const { places, message, isSearchVisible, isPlacesVisible } = mapState;

  const togglePlacesVisible = () => {
    isPlacesVisible ? setPlacesHidden() : setPlacesVisible();
  };

  console.log('places: ', places);
  console.log('[isSearchVisible]: ', isSearchVisible);
  console.log('[isPlacesVisible]: ', isPlacesVisible);
  console.log('[result]: ', isSearchVisible && isPlacesVisible);
  return (
    <>
      {message && <p className={cx('map-search-msg')}>{message}</p>}
      {isPlacesVisible && (
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
                    <h5>{place_name}</h5>
                    {road_address_name && <p>{road_address_name}</p>}
                    {address_name && <p>{address_name}</p>}
                    {phone && <p>{phone}</p>}
                  </div>
                </li>
              );
            },
          )}
        </ul>
      )}
    </>
  );
};

export default MapSearchList;
