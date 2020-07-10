import React from 'react';
import classNames from 'classnames/bind';
import { MainContext } from '../Context/MainContext';
import styles from './Style/MyPage.module.scss';

const cx = classNames.bind(styles);

const MyPage = () => {
  const mainCtx = React.useContext(MainContext);
  const { diaries, userData } = mainCtx.state;
  const { userId } = userData;

  return (
    <main>
      <aside>
        <h2 className={cx('greeting')}>안녕하세요 {userId}님!</h2>
        <ul className={cx('statistics')}>
          <li>
            <span className={cx('numbers')}>235</span>
            <span>일기수</span>
          </li>
          <li>
            <span className={cx('numbers')}>23</span>
            <span>북마크수</span>
          </li>
          <li>
            <span className={cx('numbers')}>2.3</span>
            <span>평균 일기수</span>
          </li>
        </ul>
        <button type="button">로그아웃</button>
      </aside>
      <h3 className={cx('listTitle')}>북마크 다이어리 리스트</h3>
      <ul className={cx('diaryList')}>
        <li>다이어리1</li>
        <li>다이어리2</li>
        <li>다이어리3</li>
      </ul>
    </main>
  );
};

export default MyPage;
