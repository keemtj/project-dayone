import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/DiarySubmitBtn.module.scss';
import { MainContext } from '../../Context/MainContext';
import { DiaryContext } from '../../Context/DiaryContext';

const cx = classNames.bind(styles);

const DiarySubmitBtn = () => {
  const { state, pushDiaryId } = React.useContext(MainContext);
  const { setModalState } = React.useContext(DiaryContext);

  const { content } = state.currentDiary;
  const { title } = state.currentDiary;

  const didWrite = () => {
    return content && title.trim() && content !== '<p><br></p>';
  };

  const onClick = (e) => {
    e.preventDefault();
    if (!didWrite()) return;
    setModalState('Submit');
    pushDiaryId();
  };

  return (
    <button
      style={{ backgroundColor: didWrite() ? '#67bff9' : '#cacaca' }}
      className={cx('submitBtn')}
      type="submit"
      onClick={onClick}
    >
      완료
    </button>
  );
};

export default DiarySubmitBtn;
