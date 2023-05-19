import React, { useRef, useEffect } from "react";

const Map = ({ lat, lng }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Create a new map instance
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom: 2,
    });

    // Create a marker for the provided coordinates
    new window.google.maps.Marker({
      position: { lat, lng },
      map: map,
    });
  }, [lat, lng]);

  return (
    <div className="MapWrap">
      <div ref={mapRef} className="map" />
      <div className="latLong">
        <div className="lat">
        <div className="keyName">Lat : </div>{" "}
        <div className="valueName">{lat} </div>
        </div>
        <div className="lat">
        <div className="keyName">Lat : </div>{" "}
        <div className="valueName">{lat} </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
