/* eslint-disable react/no-danger */
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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

  useEffect(() => {
    getDiary(id);
    return () => {
      clearViewerDiary();
    };
  }, []);

  if (!state.viewerDiary) return <p>다이어리가 존재하지 않습니다.</p>;

  const clickDelete = () => setViewerState('Delete');

  const clickEdit = () => {
    setEditState();
    history.push('/diary');
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
      <button
        className={cx('button', 'editBtn')}
        type="button"
        onClick={clickEdit}
      >
        수정
      </button>
      <button
        className={cx('button', 'deleteBtn')}
        type="button"
        onClick={clickDelete}
      >
        삭제
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
