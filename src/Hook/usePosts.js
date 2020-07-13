import { useEffect, useReducer } from 'react';
import Api from '../Api/Api';
import { initialState, mainReducer } from '../Reducer/mainReducer';

const usePosts = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const diaries = await Api.getDiaries();
      // console.log('diaries:', diaries);
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

  const patchBookmark = async (id, isBookmarked) => {
    // id = diary.id;
    // isBookmarked = e.target.checked;
    dispatch({ type: 'TOGGLE_BOOKMARK', id, isBookmarked });

    try {
      await Api.patchDiaries({ id, isBookmarked });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: { error: { state: true, error: e.message } },
      });
    }
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
    patchBookmark,
  ];
};

export default usePosts;
