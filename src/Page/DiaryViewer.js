/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MainContext } from '../Context/MainContext';

const DiaryViewer = () => {
  const { state, getDiary, clearViewerDiary } = React.useContext(MainContext);
  const { id } = useParams();

  useEffect(() => {
    getDiary(id);
    return () => {
      // state.viewerDiary = {};
      clearViewerDiary();
    };
    // console.log('viewer', state.viewerDiary);
  }, []);

  // const diary = state.diaries.find((v) => v.id === +id);
  const renderDiary = () => {
    if (!state.viewerDiary.body) return '';
    return <div dangerouslySetInnerHTML={{ __html: state.viewerDiary.body }} />;
  };

  return (
    <div>
      {console.log('viewer', state.viewerDiary)}
      <h1>다이어리 뷰어</h1>
      {console.log(state.viewerDiary)}
      {/* {renderDiary()} */}
      {/* <div dangerouslySetInnerHTML={{ __html: state.viewerDiary.body }} /> */}
    </div>
  );
};

export default DiaryViewer;
