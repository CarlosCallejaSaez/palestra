import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as geolib from 'geolib';


const Map = () => {
  const businessLocation = { latitude: 42.0075, longitude: -4.5320 }; 
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          
          const calculatedDistance = geolib.getDistance(userLocation, businessLocation);

         
          setDistance(calculatedDistance);
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [businessLocation]);

  return (
    <div>
      <MapContainer
        center={[businessLocation.latitude, businessLocation.longitude]}
        zoom={15}
        style={{ width: '100%', height: '400px' }}
      >
        
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        
        <Marker position={[businessLocation.latitude, businessLocation.longitude]}>
          
          <Popup>
            Palestra Gym
          </Popup>
        </Marker>
      </MapContainer>

      
      {distance !== null && (
        <p>
          The distance between your location and Palestra Gym is approximately{' '}
          {distance / 1000} kilometers, that is what separates you from fulfilling your dreams
        </p>
      )}
    </div>
  );
};

export default Map;
