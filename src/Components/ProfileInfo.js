import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import styles from '../Page/Style/MyPage.module.scss';

const cx = classNames.bind(styles);

const ProfileInfo = ({ pageCtx }) => {
  const { diaries, bookmarked, userId, diaryPerDay, onClickLogOut } = pageCtx;

  return (
    <div className={cx('profile')}>
      <img className={cx('profilePic')} src="" alt={userId} />
      <div className={cx('infoWrapper')}>
        <h2 className={cx('greeting')}>
          안녕하세요
          <span>
            {userId}
            님!
          </span>
        </h2>
        <h3 className={cx('profileMsg')}>상태메시지 룰루랄라</h3>
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
      </div>
      <button
        type="button"
        className={cx('settingBtn')}
        style={{ left: `calc(29rem + ${userId.length * 13}px)` }}
      >
        <FontAwesomeIcon icon={faCog} />
      </button>
      <button type="button" className={cx('logoutBtn')} onClick={onClickLogOut}>
        <FontAwesomeIcon icon={faSignOutAlt} className={cx('icon')} />
        로그아웃
      </button>
    </div>
  );
};

export default ProfileInfo;
