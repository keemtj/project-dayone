const GET_DIARIES = 'timeline/GET_DIARIES';
const POST_DIARY = 'timeline/POST_DIARY';
const PATCH_DIARY = 'timeline/PATCH_DIARY';
const DELETE_DIARY = 'timeline/DELETE_DIARY';

export const getDiaries = () => ({ type: GET_DIARIES });
export const postDiary = () => ({ type: POST_DIARY });
export const patchDiary = () => ({ type: PATCH_DIARY });
export const deleteDiary = () => ({ type: DELETE_DIARY });

const initialState = {
  diaries: [],
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DIARIES:
      return {
        ...state,
      };
    case POST_DIARY:
      return {
        ...state,
        diaries: action.diaries,
      };
    case PATCH_DIARY:
      return {
        ...state,
        diaries: action.diaries,
      };
    case DELETE_DIARY:
      return {
        ...state,
        diaries: action.diaries,
      };
    default:
      return state;
  }
};

export default timelineReducer;
