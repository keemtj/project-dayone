import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/Modal.module.scss';
import { DiaryContext } from '../../Context/DiaryContext';

const cx = classNames.bind(styles);

const ModalButtons = ({ dateState }) => {
  const { modalState, setModalState } = React.useContext(DiaryContext);

  const calendarSubmit = () => {};

  const mapSubmit = () => {};

  return (
    <div className={cx('btnWrapper')}>
      <button
        type="button"
        className={cx('cancelBtn')}
        onClick={() => setModalState('initial')}
      >
        취소
      </button>
      <button
        type="button"
        className={cx('submitBtn')}
        onClick={modalState === 'calendar' ? calendarSubmit : mapSubmit}
      >
        확인
      </button>
    </div>
  );
};

export default ModalButtons;
