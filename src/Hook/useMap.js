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
    console.log('setPlaces: ', places);
    dispatch({ type: 'SET_PLACES', places });
  };

  const setPagination = (pagination) => {
    console.log('setPagination: ', pagination);
    dispatch({ type: 'SET_PAGINATION', pagination });
  };

  const setSearchVisible = () => {
    // console.log('setSearchVisible');
    dispatch({ type: 'SET_SEARCH_VISIBLE' });
  };

  const setSearchHidden = () => {
    // console.log('setSearchHidden');
    dispatch({ type: 'SET_SEARCH_HIDDEN' });
  };

  const setPlacesVisible = () => {
    // console.log('setPlacesVisible');
    dispatch({ type: 'SET_PLACES_VISIBLE' });
  };

  const setPlacesHidden = () => {
    // console.log('setPlacesHidden');
    dispatch({ type: 'SET_PLACES_HIDDEN' });
  };

  const setMessage = (message) => {
    // console.log('setMessage: ', message);
    dispatch({ type: 'SET_MESSAGE', message });
  };

  const updatePlace = (payload) => {
    console.log('updatePlace...payload: ', payload);

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
