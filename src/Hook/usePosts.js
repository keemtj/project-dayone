import { useEffect, useReducer } from 'react';
import testApi from '../Api/testApi';
import { initialState, testReducer } from '../Reducer/testReducer';

const usePosts = () => {
  const [state, dispatch] = useReducer(testReducer, initialState);

  const fetchData = async () => {
    const postsData = await testApi.getDiaries();
    console.dir(postsData);
    try {
      dispatch({ type: 'LOADING' });

      if (postsData.status === 200) dispatch({ type: 'SUCCESS', postsData });
      dispatch({
        type: 'ERROR',
        error: { state: true, message: postsData.statusText },
      });
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

  return [state, fetchData];
};

export default usePosts;
