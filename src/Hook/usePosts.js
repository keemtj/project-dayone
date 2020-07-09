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

  const writePost = (write) => {
    dispatch({ type: 'WRITE_POST', write });
    console.log('diapatch write');
  };

  const submitDiary = () => {
    dispatch({ type: 'SUBMIT_POST' });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [state, fetchData, writePost, submitDiary];
};

export default usePosts;
