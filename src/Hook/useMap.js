import { useReducer } from 'react';
import { mapInitState, mapReducer } from '../Reducer/mapReducer';

const useMap = () => {
  const [mapState, dispatch] = useReducer(mapReducer, mapInitState);

  const setSublist = (diaries, lat, lng) => {
    const sublist = diaries.filter(
      ({ location }) => location.lat === lat && location.lng === lng,
    );
    console.log('setSublist');
    dispatch({ type: 'SET_SUBLIST', sublist });
  };

  const setPlaces = (places) => {
    console.log('setPlaces: ', places);
    dispatch({ type: 'SET_PLACES', places });
  };

  const setSearchVisible = () => {
    console.log('setSearchVisible');
    dispatch({ type: 'SET_SEARCH_VISIBLE' });
  };

  const setSearchHidden = () => {
    console.log('setSearchHidden');
    dispatch({ type: 'SET_SEARCH_HIDDEN' });
  };

  const setPlacesVisible = () => {
    console.log('setPlacesVisible');
    dispatch({ type: 'SET_PLACES_VISIBLE' });
  };

  const setPlacesHidden = () => {
    console.log('setPlacesHidden');
    dispatch({ type: 'SET_PLACES_HIDDEN' });
  };

  const setMessage = (message) => {
    console.log('setMessage: ', message);
    dispatch({ type: 'SET_MESSAGE', message });
  };

  return {
    mapState,
    setSublist,
    setPlaces,
    setSearchVisible,
    setSearchHidden,
    setPlacesVisible,
    setPlacesHidden,
    setMessage,
  };
};

export default useMap;
