import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const API_KEY = 'AIzaSyAn2DHcY5Fz4UCOlqlylRT55wMZ4-O9psc';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 31.5204, 
  lng: 74.3587, 
};

const markers = [
  { lat: 31.5332, lng: 74.3792 }, // USA marker
  { lat: 31.5409, lng: 74.3733 }, // CMH hospital
  { lat: 31.5293, lng: 74.3787 }, // Mall of Lahore
];

const InparkMap = () => {
  return (

      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}

          {/* <Marker position={'39.5332, 72.3792'} /> */}
        </GoogleMap>
      </LoadScript>
  )
}

export default InparkMap
