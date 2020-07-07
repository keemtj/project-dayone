import React from 'react';
import classNames from 'classnames/bind';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Style/DiaryMap.module.scss';
import { DiaryContext } from '../../Context/DiaryContext';

const cx = classNames.bind(styles);

const DiaryMap = () => {
  const { setModalState } = React.useContext(DiaryContext);

  const onClick = () => {
    setModalState('Map');
  };

  return (
    <>
      <button className={cx('mapButton')} type="button" onClick={onClick}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className={cx('mapIcon')} />
        <span className={cx('mapMsg')}>위치를 선택하세요</span>
      </button>
    </>
  );
};

export default DiaryMap;
