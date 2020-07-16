/* eslint-disable no-case-declarations */
export const mapInitState = {
  map: {},
  sublist: [],
  places: [],
  pagination: {},
  placeMarkers: [],
  isSearchVisible: false,
  isPlacesVisible: false,
  message: '',
  clickPosition: {},
};

export const mapReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MAP':
      return {
        ...state,
        map: action.map,
      };
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
    case 'SET_PAGINATION':
      return {
        ...state,
        pagination: action.pagination,
      };
    case 'SET_PLACEMARKERS':
      return {
        ...state,
        placeMarkers: action.placeMarkers,
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
    case 'UPDATE_PLACE':
      const {
        places,
        pagination,
        placeMarkers,
        isSearchVisible,
        isPlacesVisible,
        message,
      } = action.payload;

      return {
        map: state.map,
        sublist: state.sublist,
        places,
        pagination,
        placeMarkers,
        isSearchVisible,
        isPlacesVisible,
        message,
      };
    case 'SET_CLICK_POSITION':
      return {
        ...state,
        clickPosition: action.clickPosition,
      };

    default:
      return state;
  }
};
