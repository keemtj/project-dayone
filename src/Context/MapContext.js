import React from 'react';
import useMap from '../Hook/useMap';

export const MapContext = React.createContext(null);

console.log('asdfasdf');
export const MapProvider = ({ children }) => {
  const {
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
    activeId,
  } = useMap();

  const mapContextValue = {
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
    activeId,
  };

  return (
    <MapContext.Provider value={mapContextValue}>
      {children}
    </MapContext.Provider>
  );
};
