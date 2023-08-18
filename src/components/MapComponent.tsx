import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Country {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface MapComponentProps {
  countries: Country[];
}

const MapComponent: React.FC<MapComponentProps> = ({ countries }) => {
  return (
    <div>
      <h2>Map Component</h2>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countries.map((country: Country) => (
          <Marker
            key={country.id}
            position={[country.latitude, country.longitude]}
          >
            <Popup>
              <strong>{country.name}</strong>
              <br />
              Latitude: {country.latitude}, Longitude: {country.longitude}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
