import { useEffect, useReducer } from 'react';
import testApi from '../Api/testApi';
import { initialState, testReducer } from '../Reducer/testReducer';

const usePosts = () => {
  const [state, dispatch] = useReducer(testReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const postsData = await testApi.getDiaries();
      console.dir(postsData);
      dispatch({ type: 'SUCCESS', postsData });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        error: { error: { state: true, error: e.message } },
      });
    }
  };

  const submitDiaryToServer = async () => {
    try {
      await testApi.postDiaries(state.currentDiary);
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
    // dispatch({ type: 'SUBMIT_POST_SERVER' });
  };

  const writeTitle = (write) => {
    dispatch({ type: 'WRITE_TITLE', write });
  };

  const pushImg = (images) => {
    dispatch({ type: 'PUSH_IMG', images });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [state, fetchData, writePost, submitDiary, writeTitle, pushImg];
};

export default usePosts;
