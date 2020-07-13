/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Style/DiaryViewer.module.scss';
import { MainContext } from '../Context/MainContext';
import DiaryModalSmall from '../Components/DiaryModalSmall';

const cx = classNames.bind(styles);

const DiaryViewer = () => {
  const [viewerState, setViewerState] = useState('initial');
  const { state, getDiary, clearViewerDiary } = React.useContext(MainContext);
  const { id } = useParams();

  useEffect(() => {
    getDiary(id);
    return () => {
      clearViewerDiary();
    };
  }, []);

  if (!state.viewerDiary) return <p>다이어리가 존재하지 않습니다.</p>;

  const onClick = () => {
    setViewerState('Delete');
  };

  const renderDiary = () => {
    return (
      <div
        className={cx('content')}
        dangerouslySetInnerHTML={{ __html: state.viewerDiary.content }}
      />
    );
  };

  return (
    <main className={cx('wrapViewer')}>
      <h1 className={cx('a11yHidden')}>다이어리 보기</h1>
      <h2 className={cx('title')}>{state.viewerDiary.title}</h2>
      <span className={cx('date')}>{state.viewerDiary.date}</span>
      {renderDiary()}
      {console.log('viewer', state.viewerDiary)}
      <button className={cx('button', 'editBtn')} type="button">
        수정
      </button>
      <button
        className={cx('button', 'deleteBtn')}
        type="button"
        onClick={onClick}
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
