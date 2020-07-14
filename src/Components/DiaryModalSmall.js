/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Style/Modal.module.scss';
import { DiaryContext } from '../Context/DiaryContext';
import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const ModalSmall = ({ viewerState, setViewerState, id }) => {
  const history = useHistory();
  const { modalState, setModalState } = React.useContext(DiaryContext);
  const { state, submitDiary, deleteDiary, editDiary } = React.useContext(
    MainContext,
  );

  const onClick = (e) => {
    if (
      !e.target.className.includes('dimed') &&
      !e.target.className.includes('modalDeleteBtn')
    )
      return;
    if (modalState === 'Submit') setModalState('initial');
    if (viewerState === 'Delete') setViewerState('initial');
  };

  const clickCancel = () => {
    if (modalState === 'Submit') setModalState('initial');
    if (viewerState === 'Delete') setViewerState('initial');
  };

  const clickConfirm = () => {
    if (modalState === 'Submit') {
      if (!state.editState) submitDiary();
      history.push(`/diaryViewer/${state.currentDiary.id}`);
      setModalState('initial');
    }
    if (state.editState) {
      editDiary();
    }
    if (viewerState === 'Delete') {
      deleteDiary(id);
      setViewerState('Deleted');
    }
  };

  const changeModalState = () => {
    if (modalState === 'Submit') return 'block';
    if (viewerState === 'Delete') return 'block';
    if (viewerState === 'Deleted') return 'block';
    return 'none';
  };

  const changeDisplay = () => {
    return viewerState === 'Deleted' ? { display: 'none' } : {};
  };

  const changeText = () => {
    if (modalState === 'Submit')
      return (
        <span className={cx('message')}>일기 작성을 완료하시겠습니까?</span>
      );
    if (viewerState === 'Delete')
      return <span className={cx('message')}>일기를 삭제 하시겠습니까?</span>;
    if (viewerState === 'Deleted') {
      setTimeout(() => {
        history.goBack();
        setViewerState('initial');
      }, 1000);
      return (
        <span style={{ marginTop: '26px' }} className={cx('message')}>
          일기가 삭제 되었습니다.
        </span>
      );
    }
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
        <button
          style={changeDisplay()}
          className={cx('cancel')}
          type="button"
          onClick={clickCancel}
        >
          취소
        </button>
        <button
          style={changeDisplay()}
          className={cx('confirm')}
          type="button"
          onClick={clickConfirm}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default ModalSmall;
