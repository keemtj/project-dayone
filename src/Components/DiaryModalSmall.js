/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Style/Modal.module.scss';
import { DiaryContext } from '../Context/DiaryContext';
import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const ModalSmall = () => {
  const history = useHistory();
  const { modalState, setModalState } = React.useContext(DiaryContext);
  const { submitDiary } = React.useContext(MainContext);

  const onClick = (e) => {
    if (
      !e.target.className.includes('dimed') &&
      !e.target.className.includes('modalDeleteBtn')
    )
      return;
    setModalState('initial');
  };

  const cancelSubmit = () => {
    setModalState('initial');
  };

  const confirmSubmit = () => {
    history.push(`/diaryViewer/${1}`);
    setModalState('initial');
    if (modalState === 'Submit') submitDiary();
  };

  const changeModalState = () => {
    if (modalState === 'Submit') return 'block';
    return 'none';
  };

  const changeText = () => {
    if (modalState === 'Submit')
      return (
        <span className={cx('message')}>일기 작성을 완료하시겠습니까?</span>
      );
    return <></>;
  };

  return (
    <div
      style={{ display: `${changeModalState()}` }}
      className={cx('dimed')}
      onClick={onClick}
    >
      <div className={cx('small')}>
        {changeText()}
        <button className={cx('cancel')} type="button" onClick={cancelSubmit}>
          취소
        </button>
        <button className={cx('confirm')} type="button" onClick={confirmSubmit}>
          확인
        </button>
      </div>
    </div>
  );
};

export default ModalSmall;
