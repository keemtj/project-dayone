import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/DiarySubmitBtn.module.scss';
import { DiaryContext } from '../../Context/DiaryContext';

const cx = classNames.bind(styles);

const DiarySubmitBtn = () => {
  const { setModalState } = React.useContext(DiaryContext);

  const onClick = (e) => {
    e.preventDefault();
    setModalState('Submit');
  };

  return (
    <button className={cx('submitBtn')} type="submit" onClick={onClick}>
      완료
    </button>
  );
};

export default DiarySubmitBtn;
