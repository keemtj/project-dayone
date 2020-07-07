const initialState = {
  postsData: [],
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

const testReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        postsData: action.postsData,
        loading: false,
      };
    case 'ERROR':
      return {
        ...state,
        error: {
          state: true,
          message: action.message,
        },
        loading: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { initialState, testReducer };
