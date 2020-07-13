/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Style/DiaryViewer.module.scss';
import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const DiaryViewer = () => {
  const { state, getDiary, clearViewerDiary } = React.useContext(MainContext);
  const { id } = useParams();

  useEffect(() => {
    getDiary(id);
    return () => {
      clearViewerDiary();
    };
  }, []);

  if (!state.viewerDiary) return <p>다이어리가 존재하지 않습니다.</p>;
  const renderDiary = () => {
    return (
      <div dangerouslySetInnerHTML={{ __html: state.viewerDiary.content }} />
    );
  };

  return (
    <main className={cx('wrapViewer')}>
      {console.log('viewer', state.viewerDiary)}
      <h1 className={cx('a11yHidden')}>다이어리 보기</h1>
      {renderDiary()}
    </main>
  );
};

export default DiaryViewer;
