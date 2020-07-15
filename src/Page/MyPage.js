import React from 'react';
import { Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Style/MyPage.module.scss';
import DiaryViewer from './DiaryViewer';
import { MainContext, LoginContext } from '../Context/MainContext';
import ProfileInfo from '../Components/ProfileInfo';
import BookmarkDiaries from '../Components/BookmarkDiaries';

const cx = classNames.bind(styles);

const MyPage = () => {
  const mainCtx = React.useContext(MainContext);
  const loginCtx = React.useContext(LoginContext);
  const { logOut } = loginCtx;
  const { dispatch, patchBookmark } = mainCtx;
  const { diaries, userData } = mainCtx.state;
  const { userId } = userData;
  const bookmarked = diaries.filter(({ isBookmarked }) => isBookmarked);

  const yy = diaries[0].date.split('-')[0];
  const mm = diaries[0].date.split('-')[1];
  const dd = diaries[0].date.split('-')[2];
  const diaryTerm = Math.floor((Date.now() - Date.UTC(yy, mm, dd)) / 86400000);
  const diaryPerDay = Number((diaries.length / diaryTerm).toFixed(1));

  const onClickLogOut = () => {
    dispatch({ type: 'LOG_OUT' });
    logOut();
  };

  const onChangeBookmark = (e) => {
    const id = e.target.id.split('-')[1];
    patchBookmark(id, e.target.checked);
  };

  const pageCtx = {
    diaries,
    bookmarked,
    userId,
    diaryPerDay,
    onClickLogOut,
    onChangeBookmark,
  };

  return (
    <main className={cx('main')}>
      <ProfileInfo pageCtx={pageCtx} />
      <BookmarkDiaries pageCtx={pageCtx} />
      <Route path="/diaryViewer/:id" component={DiaryViewer} />
    </main>
  );
};

export default MyPage;
