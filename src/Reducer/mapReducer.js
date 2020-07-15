export const mapInitState = {
  sublist: [],
  places: [],
  isSearchVisible: false,
  isPlacesVisible: false,
  message: '',
};

export const mapReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SUBLIST':
      return {
        ...state,
        sublist: action.sublist,
      };
    case 'SET_PLACES':
      return {
        ...state,
        places: action.places,
      };
    case 'SET_SEARCH_VISIBLE':
      return {
        ...state,
        isSearchVisible: true,
      };
    case 'SET_SEARCH_HIDDEN':
      return {
        ...state,
        isSearchVisible: false,
        isPlacesVisible: false,
      };
    case 'SET_PLACES_VISIBLE':
      return {
        ...state,
        isPlacesVisible: true,
      };
    case 'SET_PLACES_HIDDEN':
      return {
        ...state,
        isPlacesVisible: false,
      };
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};
