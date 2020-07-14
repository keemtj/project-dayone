import React from 'react';
import { Route, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/MyPage.module.scss';
import DiaryViewer from './DiaryViewer';
import { MainContext, LoginContext } from '../Context/MainContext';

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

  return (
    <main className={cx('main')}>
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
        <button
          type="button"
          className={cx('logoutBtn')}
          onClick={onClickLogOut}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className={cx('icon')} />
          로그아웃
        </button>
      </div>
      <h3 className={cx('listTitle')}>
        <FontAwesomeIcon icon={faBookmark} className={cx('icon')} />
        Bookmarked Diaries
      </h3>
      <ul className={cx('diaryList')}>
        {bookmarked.map(({ id, title, date, imagePaths, isBookmarked }) => {
          return (
            <li key={id} className={cx('diary')}>
              <label htmlFor={`bookmark-${id}`} className={cx('bookmark')}>
                <input
                  id={`bookmark-${id}`}
                  type="checkbox"
                  checked={isBookmarked ? 'checked' : ''}
                  onChange={onChangeBookmark}
                />
                <span>
                  <FontAwesomeIcon icon={faBookmark} />
                </span>
              </label>
              <Link to={`/diaryViewer/${id}`}>
                <figure>
                  <div
                    style={{
                      backgroundImage: `url(${
                        imagePaths.length
                          ? imagePaths[0]
                          : 'https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png'
                      })`,
                    }}
                    className={cx('thumbnail')}
                    alt="thumbnail"
                  />
                  <figcaption className={cx('caption')}>
                    <span className={cx('diaryTitle')}>{title}</span>
                    <span className={cx('diaryDate')}>{date}</span>
                  </figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
      <Route path="/diaryViewer/:id" component={DiaryViewer} />
    </main>
  );
};

export default MyPage;
