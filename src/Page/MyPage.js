import React, { useState } from 'react';
// import { Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Style/MyPage.module.scss';
// import DiaryViewer from './DiaryViewer';
import { MainContext, LoginContext } from '../Context/MainContext';
import ProfileInfo from '../Components/ProfileInfo';
import BookmarkDiaries from '../Components/BookmarkDiaries';
import MypageModal from '../Components/MypageModal';

const cx = classNames.bind(styles);

const MyPage = () => {
  const [modalState, setModalState] = useState(false);
  const mainCtx = React.useContext(MainContext);
  const loginCtx = React.useContext(LoginContext);
  const { logOut } = loginCtx;
  const { dispatch, patchBookmark, editProfile } = mainCtx;
  const { diaries, userData } = mainCtx.state;
  const { userId, pic, msg } = userData;
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

  const onClickSetting = () => setModalState(true);
  const closeModal = () => setModalState(false);
  const onClickDimmed = (e) => {
    if (!e.target.className.includes('dimmed')) return;
    setModalState();
  };

  const onChangeBookmark = (e) => {
    const id = e.target.id.split('-')[1];
    patchBookmark(id, e.target.checked);
  };

  const pageCtx = {
    diaries,
    bookmarked,
    userId,
    pic,
    msg,
    diaryPerDay,
    onClickLogOut,
    onChangeBookmark,
    onClickSetting,
    closeModal,
    onClickDimmed,
    editProfile,
  };

  return (
    <main className={cx('main')}>
      <ProfileInfo pageCtx={pageCtx} />
      <BookmarkDiaries pageCtx={pageCtx} />
      {modalState ? <MypageModal pageCtx={pageCtx} /> : null}
      {/* <Route path="/diaryViewer/:id" component={DiaryViewer} /> */}
    </main>
  );
};

export default MyPage;
