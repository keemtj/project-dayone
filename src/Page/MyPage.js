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
      <h2 className={cx('greeting')}>안녕하세요 {userId}님!</h2>
      <ul>
        <li>
          <span>235</span>
          <span>일기수</span>
        </li>
        <li>
          <span>23</span>
          <span>북마크수</span>
        </li>
        <li>
          <span>2.3</span>
          <span>평균 일기수</span>
        </li>
      </ul>
      <p>마이 페이지, 네 자신을 알라</p>
    </main>
  );
};

export default MyPage;
