import React, { useState, useEffect } from 'react';
import { LatLngExpression } from 'leaflet';
import { useTheme } from '@mui/material/styles';
import {
  MapContainer,
  Circle,
  TileLayer,
  AttributionControl,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  coordinates: [number, number];
  zoom: number;
}

const Map: React.FC<Props> = ({ coordinates, zoom }) => {
  const theme = useTheme();
  const businessName = 'Réparobot';
  const address = "160 Chaussée d'ecaussinnes, 7090 Braine le comte, Belgique";
  const position: LatLngExpression = coordinates;
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    const handleResize = () => setMapKey((prev) => prev + 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fillOptions = {
    fillColor:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.main
        : theme.palette.success.dark,
    fillOpacity: 0.6,
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.light
        : theme.palette.success.light,
  };

  return (
    <div>
      <h2>{`Location of ${businessName}`}</h2>
      <MapContainer
        key={mapKey}
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%' }}
        aria-label={`Map showing location of ${businessName}`}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={position} pathOptions={fillOptions} radius={50} />
        <Marker position={position}>
          <Popup>
            <strong>{businessName}</strong>
            <br />
            {address}
          </Popup>
        </Marker>
        <AttributionControl position="bottomright" prefix={false} />
      </MapContainer>
    </div>
  );
};

export default React.memo(Map);
