import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../Style/DiarySubmitBtn.module.scss';
import { MainContext } from '../../Context/MainContext';
import { DiaryContext } from '../../Context/DiaryContext';

const cx = classNames.bind(styles);

const DiarySubmitBtn = () => {
  const { state, pushDiaryId } = React.useContext(MainContext);
  const { setModalState } = React.useContext(DiaryContext);
  const history = useHistory();

  const { content } = state.currentDiary;
  const { title } = state.currentDiary;

  const didWrite = () => {
    return content && title.trim() && content !== '<p><br></p>';
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    if (!didWrite()) return;
    setModalState('Submit');
    if (!state.editState) pushDiaryId();
  };

  return (
    <div className={cx('wrapBtn')}>
      <button
        className={cx('goBackBtn')}
        type="button"
        onClick={() => history.goBack()}
      >
        취소
      </button>
      <button
        className={cx('submitBtn', { active: didWrite() })}
        type="submit"
        onClick={clickSubmit}
      >
        완료
      </button>
    </div>
  );
};

export default DiarySubmitBtn;
