/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Style/Modal.module.scss';
import { DiaryContext } from '../Context/DiaryContext';
import ModalMap from './Diary/ModalMap';
import ModalCalendar from './Diary/ModalCalendar';
import ModalSubmit from './Diary/ModalSubmit';

const cx = classNames.bind(styles);

const Modal = () => {
  const { modalState, setModalState } = React.useContext(DiaryContext);
  const onClick = (e) => {
    if (
      !e.target.className.includes('dimed') &&
      !e.target.className.includes('modalDeleteBtn')
    )
      return;
    setModalState('initial');
  };

  const changeModal = () => {
    if (modalState === 'Calendar') return <ModalCalendar />;
    if (modalState === 'Map') return <ModalMap />;
    if (modalState === 'Submit') {
      return <ModalSubmit />;
    }
    return <></>;
  };

  return (
    <div
      style={{ display: `${modalState === 'initial' ? 'none' : 'block'}` }}
      className={cx('dimed')}
      onClick={onClick}
    >
      <div className={cx('modal', `${modalState === 'Submit' ? 'small' : ''}`)}>
        {changeModal()}
        <button
          style={{ display: `${modalState === 'Submit' ? 'none' : 'block'}` }} // 작은 모달 따로 뺼 것.
          className={cx('modalDeleteBtn')}
          type="button"
          onClick={onClick}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
