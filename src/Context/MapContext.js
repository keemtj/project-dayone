import React from 'react';
import useMap from '../Hook/useMap';

export const MapContext = React.createContext(null);

export const MapProvider = ({ children }) => {
  const {
    mapState,
    setSublist,
    setPlaces,
    setPagination,
    setPageList,
    setCurrentPage,
    setSearchVisible,
    setSearchHidden,
    setPlacesVisible,
    setPlacesHidden,
    setMessage,
  } = useMap();

  const mapContextValue = {
    mapState,
    setSublist,
    setPlaces,
    setPagination,
    setPageList,
    setCurrentPage,
    setSearchVisible,
    setSearchHidden,
    setPlacesVisible,
    setPlacesHidden,
    setMessage,
  };

  return (
    <MapContext.Provider value={mapContextValue}>
      {children}
    </MapContext.Provider>
  );
};
