import { useReducer } from 'react';
import { mapInitState, mapReducer } from '../Reducer/mapReducer';

const useMap = () => {
  const [mapState, dispatch] = useReducer(mapReducer, mapInitState);

  const setSublist = (diaries, lat, lng) => {
    const sublist = diaries.filter(
      ({ location }) => location.lat === lat && location.lng === lng,
    );
    dispatch({ type: 'SET_SUBLIST', sublist });
  };

  const setPlaces = (places) => {
    dispatch({ type: 'SET_PLACES', places });
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

  return {
    mapState,
    setSublist,
    setPlaces,
    setSearchVisible,
    setSearchHidden,
    setPlacesVisible,
    setPlacesHidden,
  };
};

export default useMap;
