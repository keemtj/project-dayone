import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/DiaryTitle.module.scss';
import { MainContext } from '../../Context/MainContext';

const cx = classNames.bind(styles);

const DiaryTitle = () => {
  const { state, writeTitle } = React.useContext(MainContext);
  const onChange = (e) => {
    writeTitle(e.target.value);
  };

  return (
    <input
      className={cx('diaryTitle')}
      value={state.currentDiary.title}
      type="text"
      placeholder="일기 제목"
      onChange={onChange}
    />
  );
};

export default DiaryTitle;
