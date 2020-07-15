import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../Page/Style/MyPage.module.scss';

const cx = classNames.bind(styles);

const ProfileInfo = ({ pageCtx }) => {
  const { diaries, bookmarked, userId, diaryPerDay, onClickLogOut } = pageCtx;

  return (
    <div className={cx('profile')}>
      <h2 className={cx('greeting')}>
        안녕하세요
        <span>
          {userId}
          님!
        </span>
      </h2>
      <ul className={cx('statistics')}>
        <li>
          <span className={cx('numbers')}>{diaries.length}</span>
          <span className={cx('caption')}>일기수</span>
        </li>
        <li>
          <span className={cx('numbers')}>{bookmarked.length}</span>
          <span className={cx('caption')}>북마크수</span>
        </li>
        <li>
          <span className={cx('numbers')}>{diaryPerDay}</span>
          <span className={cx('caption')}>평균 일기수</span>
        </li>
      </ul>
      <button type="button" className={cx('logoutBtn')} onClick={onClickLogOut}>
        <FontAwesomeIcon icon={faSignOutAlt} className={cx('icon')} />
        로그아웃
      </button>
    </div>
  );
};

export default ProfileInfo;
