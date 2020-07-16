/* eslint-disable no-unused-expressions */
import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../Style/MapSearchForm.module.scss';
import { MapContext } from '../../Context/MapContext';

const cx = classNames.bind(styles);

const MapSearchForm = ({ searchPlaces }) => {
  const mapContext = useContext(MapContext);
  const {
    mapState,
    setSearchVisible,
    setSearchHidden,
    setPlacesHidden,
  } = mapContext;
  const { isSearchVisible } = mapState;

  const [inputs, setInputs] = useState('');

  const toggleVisible = () => {
    if (isSearchVisible) {
      setSearchHidden();
      setPlacesHidden();
      return;
    }
    setSearchVisible();
  };

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchPlaces(inputs);
  };

  return (
    <div className={cx('searchFormWrapper')}>
      <button
        className={cx('searchIconBtn')}
        type="button"
        onClick={toggleVisible}
      >
        {isSearchVisible ? (
          <FontAwesomeIcon icon={faAngleLeft} />
        ) : (
          <FontAwesomeIcon icon={faSearch} />
        )}
      </button>
      <form
        className={cx('searchForm', { visible: isSearchVisible })}
        onSubmit={onSubmit}
      >
        <input
          className={cx('searchInput')}
          type="text"
          value={inputs}
          onChange={handleChange}
        />
        <button className={cx('searchBtn')} type="submit">
          검색
        </button>
      </form>
    </div>
  );
};

export default MapSearchForm;
