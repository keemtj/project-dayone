/* eslint-disable react/no-danger */
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import classNames from 'classnames/bind';
import styles from './Style/DiaryViewer.module.scss';
import { MainContext } from '../Context/MainContext';
import DiaryModalSmall from '../Components/DiaryModalSmall';

const cx = classNames.bind(styles);

const DiaryViewer = () => {
  const [viewerState, setViewerState] = useState('initial');
  const { state, getDiary, clearViewerDiary, setEditState } = useContext(
    MainContext,
  );
  const { id } = useParams();
  const history = useHistory();
  const lastLocation = useLastLocation();

  useEffect(() => {
    getDiary(id);
    return () => {
      clearViewerDiary();
    };
  }, []);

  // console.log(History);

  if (!state.viewerDiary) return <p>다이어리가 존재하지 않습니다.</p>;

  const clickEdit = () => {
    setEditState();
    history.push('/diary');
  };

  const clickDelete = () => setViewerState('Delete');

  const clickGoBack = () => {
    if (!lastLocation) {
      history.goBack();
      return;
    }
    if (lastLocation.pathname === '/diary') {
      window.history.go(-2);
    }
    if (lastLocation.pathname.includes('/diaryViewer')) {
      window.history.go(-3);
    } else {
      history.goBack();
    }
  };

  const renderDiary = () => (
    <div
      className={cx('content')}
      dangerouslySetInnerHTML={{ __html: state.viewerDiary.content }}
    />
  );

  return (
    <main className={cx('wrapViewer')}>
      <h1 className={cx('a11yHidden')}>다이어리 보기</h1>
      <h2 className={cx('title')}>{state.viewerDiary.title}</h2>
      <span className={cx('date')}>{state.viewerDiary.date}</span>
      {renderDiary()}
      <button className={cx('editBtn')} type="button" onClick={clickEdit}>
        수정
      </button>
      <button className={cx('deleteBtn')} type="button" onClick={clickDelete}>
        삭제
      </button>
      <DiaryModalSmall
        viewerState={viewerState}
        setViewerState={setViewerState}
        id={+id}
      />
      <button
        className={cx('goBackBtn')}
        type="button"
        // onClick={() => history.goBack()}
        onClick={clickGoBack}
      >
        뒤로가기
      </button>
      <DiaryModalSmall
        viewerState={viewerState}
        setViewerState={setViewerState}
        id={+id}
      />
    </main>
  );
};

export default DiaryViewer;
