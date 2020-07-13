import { useEffect, useReducer } from 'react';
import Api from '../Api/Api';
import { initialState, mainReducer } from '../Reducer/mainReducer';

const usePosts = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const diaries = await Api.getDiaries();
      console.log('diaries:', diaries);
      dispatch({ type: 'SUCCESS', diaries });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: { error: { state: true, error: e.message } },
      });
    }
  };

  const submitDiaryToServer = async () => {
    try {
      await Api.postDiaries(state.currentDiary);
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: { error: { state: true, error: e.message } },
      });
    }
  };

  const getDiary = async (id) => {
    // if (state.diaries.find((v) => v.id === +id)) return;
    try {
      const diary = await Api.getDiaryById(id);
      console.log('testtt', diary);

      dispatch({ type: 'GET_DIARY', diary });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: { error: { state: true, error: e.message } },
      });
    }
  };

  const writePost = (write) => {
    dispatch({ type: 'WRITE_POST', write });
  };

  const submitDiary = () => {
    dispatch({ type: 'SUBMIT_POST' });
    submitDiaryToServer();
  };

  const writeTitle = (write) => {
    dispatch({ type: 'WRITE_TITLE', write });
  };

  const pushImg = (images) => {
    dispatch({ type: 'PUSH_IMG', images });
  };

  const pushDiaryId = () => {
    dispatch({ type: 'PUSH_DIARY_ID' });
  };

  const clearViewerDiary = () => {
    dispatch({ type: 'CLEAR_VIEWERDIARY' });
  };

  const bookmarkDiary = (id, isBookmarked) => {
    dispatch({
      type: 'TOGGLE_BOOKMARK',
      id,
      isBookmarked,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [
    state,
    dispatch,
    fetchData,
    writePost,
    submitDiary,
    writeTitle,
    pushImg,
    pushDiaryId,
    getDiary,
    clearViewerDiary,
    bookmarkDiary,
  ];
};

export default usePosts;
