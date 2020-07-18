import { useReducer } from 'react';
import { mapInitState, mapReducer } from '../Reducer/mapReducer';

const useMap = () => {
  const [mapState, dispatch] = useReducer(mapReducer, mapInitState);

  const setMap = (map) => {
    const payload = { map };
    console.log('useMap()...setMap');
    dispatch({ type: 'SET_MAP', payload });
  };

  const setSublist = (diaries, clickPosition) => {
    console.log('useMap()...setSublist');

    const sublist = diaries.filter(
      ({ location }) =>
        location.lat === clickPosition.lat &&
        location.lng === clickPosition.lng,
    );
    const payload = {
      sublist,
      clickPosition,
    };
    dispatch({ type: 'SET_SUBLIST', payload });
  };

  const setPlaces = (places) => {
    console.log('useMap()...setPlaces');

    const payload = { places };
    dispatch({ type: 'SET_PLACES', payload });
  };

  const setPagination = (pagination) => {
    console.log('useMap()...setPagination');

    const payload = pagination;
    dispatch({ type: 'SET_PAGINATION', payload });
  };

  const setSearchVisible = () => {
    console.log('useMap()...setSearchVisible');

    const payload = { isSearchVisible: true };
    dispatch({ type: 'SET_SEARCH_VISIBLE', payload });
  };

  const setSearchHidden = () => {
    console.log('useMap()...setSearchHidden');

    const payload = { isSearchVisible: false, isPlacesVisible: false };
    dispatch({ type: 'SET_SEARCH_HIDDEN', payload });
  };

  const setPlacesVisible = () => {
    console.log('useMap()...setPlacesVisible');

    const payload = { isPlacesVisible: true };
    dispatch({ type: 'SET_PLACES_VISIBLE', payload });
  };

  const setMessage = (message) => {
    console.log('useMap()...setMessage');

    const payload = { message };
    dispatch({ type: 'SET_MESSAGE', payload });
  };

  const updatePlace = (payload) => {
    console.log('useMap()...updatePlace');

    dispatch({ type: 'UPDATE_PLACE', payload });
  };

  const setClickPosition = (clickPosition) => {
    console.log('useMap()...setClickPosition');

    const payload = { clickPosition };
    dispatch({ type: 'SET_CLICK_POSITION', payload });
  };

  const setActiveId = (activeId, clickPosition, sublist) => {
    const payload = { clickPosition, sublist, activeId };
    dispatch({ type: 'SET_ACTIVE_ID' });
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
    setMessage,
    updatePlace,
    setClickPosition,
  };
};

export default useMap;
