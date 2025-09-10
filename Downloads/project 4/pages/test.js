import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Head from 'next/head';
import { useState } from 'react';
import '../styles/style.css';

export default function Home() {
  const [lang, setLang] = useState('fr');
  const translations = {
    en: { welcome: 'Welcome to SERAPHINA', verse: 'Love one another - John 13:34', places: 'Sacred Places' },
    fr: { welcome: 'Bienvenue à SERAPHINA', verse: 'Aimez-vous les uns les autres - Jean 13:34', places: 'Lieux Sacrés' },
    es: { welcome: 'Bienvenido a SERAPHINA', verse: 'Ámense los unos a los otros - Juan 13:34', places: 'Lugares Sagrados' }
  };

  return (
    <>
      <Head>
        <title>SERAPHINA</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <h1>{translations[lang].welcome}</h1>
        <p>{translations[lang].verse}</p>
        <select onChange={(e) => setLang(e.target.value)}>
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <h2>{translations[lang].places}</h2>
        <MapContainer center={[43.0947, -0.0469]} zoom={10} className="map-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[43.0947, -0.0469]}>
            <Popup>Lourdes, France - Sanctuaire Marial</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}