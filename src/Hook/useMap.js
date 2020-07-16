import { useReducer } from 'react';
import { mapInitState, mapReducer } from '../Reducer/mapReducer';

const useMap = () => {
  const [mapState, dispatch] = useReducer(mapReducer, mapInitState);

  const setMap = (map) => {
    dispatch({ type: 'SET_MAP', map });
  };

  const setSublist = (diaries, lat, lng) => {
    const sublist = diaries.filter(
      ({ location }) => location.lat === lat && location.lng === lng,
    );
    dispatch({ type: 'SET_SUBLIST', sublist });
  };

  const setPlaces = (places) => {
    dispatch({ type: 'SET_PLACES', places });
  };

  const setPagination = (pagination) => {
    dispatch({ type: 'SET_PAGINATION', pagination });
  };

  const setSearchVisible = () => {
    dispatch({ type: 'SET_SEARCH_VISIBLE' });
  };

  const setSearchHidden = () => {
    dispatch({ type: 'SET_SEARCH_HIDDEN' });
  };

  const setPlacesVisible = () => {
    dispatch({ type: 'SET_PLACES_VISIBLE' });
  };

  const setPlacesHidden = () => {
    dispatch({ type: 'SET_PLACES_HIDDEN' });
  };

  const setMessage = (message) => {
    dispatch({ type: 'SET_MESSAGE', message });
  };

  const updatePlace = (payload) => {
    dispatch({ type: 'UPDATE_PLACE', payload });
  };

  return {
    mapState,
    setMap,
    setSublist,
    setPlaces,
    setPagination,
    setSearchVisible,
    setSearchHidden,
    setPlacesVisible,
    setPlacesHidden,
    setMessage,
    updatePlace,
  };
};

export default useMap;
