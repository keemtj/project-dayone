import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Style/DiarySubmitBtn.module.scss';

const cx = classNames.bind(styles);

const DiarySubmitBtn = () => {
  return (
    <button
      className={cx('submitBtn')}
      type="submit"
      onClick={(e) => e.preventDefault()}
    >
      완료
    </button>
  );
};

export default DiarySubmitBtn;
