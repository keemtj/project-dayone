import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTimesCircle,
  faWindowClose,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../Style/MapSearchForm.module.scss';

const cx = classNames.bind(styles);

const MapSearchForm = ({ searchPlaces }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [inputs, setInputs] = useState('');

  const toggleVisible = () => {
    setFormVisible((prevVisible) => !prevVisible);
    console.log('formVisible: ', formVisible);
  };

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchPlaces(inputs);
  };

  return (
    <div className={cx('search-form-wrapper')}>
      <button
        className={cx('search-icon-btn')}
        type="button"
        onClick={toggleVisible}
      >
        {formVisible ? (
          <FontAwesomeIcon icon={faAngleLeft} />
        ) : (
          <FontAwesomeIcon icon={faSearch} />
        )}
      </button>
      <form
        className={cx('search-form', { visible: formVisible })}
        onSubmit={onSubmit}
      >
        <input
          className={cx('search-input')}
          type="text"
          value={inputs}
          onChange={handleChange}
        />
        <button className={cx('search-btn')} type="submit">
          검색
        </button>
      </form>
    </div>
  );
};

export default MapSearchForm;
