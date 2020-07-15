import React from 'react';
import useMap from '../Hook/useMap';

export const MapContext = React.createContext(null);

export const MapProvider = ({ children }) => {
  const {
    mapState,
    setSublist,
    setPlaces,
    setSearchVisible,
    setSearchHidden,
    setPlacesVisible,
    setPlacesHidden,
  } = useMap();

  const mapContextValue = {
    mapState,
    setSublist,
    setPlaces,
    setSearchVisible,
    setSearchHidden,
    setPlacesVisible,
    setPlacesHidden,
  };

  return (
    <MapContext.Provider value={mapContextValue}>
      {children}
    </MapContext.Provider>
  );
};
