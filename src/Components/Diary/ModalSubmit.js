import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/Modal.module.scss';
import { DiaryContext } from '../../Context/DiaryContext';

const cx = classNames.bind(styles);

const ModalSubmit = () => {
  const { setModalState, history } = React.useContext(DiaryContext);

  const cancelSubmit = () => {
    setModalState('initial');
  };

  const confirmSubmit = () => {
    history.push(`/diaryViewer/${1}`);
  };

  return (
    <div>
      <span className={cx('message')}>일기 작성을 완료하시겠습니까?</span>
      <button className={cx('cancel')} type="button" onClick={cancelSubmit}>
        취소
      </button>
      <button className={cx('confirm')} type="button" onClick={confirmSubmit}>
        확인
      </button>
    </div>
  );
};

export default ModalSubmit;
