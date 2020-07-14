import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Style/DiaryMap.module.scss';
import { DiaryContext } from '../../Context/DiaryContext';
import { MainContext } from '../../Context/MainContext';

const cx = classNames.bind(styles);

const DiaryMap = () => {
  const { setModalState } = useContext(DiaryContext);
  const { state } = useContext(MainContext);

  const onClick = () => {
    setModalState('Map');
  };

  const locationMsg = () => {
    const haveLocation = !!Object.keys(state.currentDiary.location).length;
    return haveLocation ? '장소이름...' : '위치를 선택하세요';
  };

  return (
    <>
      <button className={cx('mapButton')} type="button" onClick={onClick}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className={cx('mapIcon')} />
        <span className={cx('mapMsg')}>{locationMsg()}</span>
      </button>
    </>
  );
};

export default DiaryMap;
