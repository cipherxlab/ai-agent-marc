import { useTranslation } from 'next-i18next';
import SeraphimLogo from '../components/SeraphimLogo';
import WorldMap from '../components/WorldMap';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className="hero">
      <SeraphimLogo />
      <h1>{t('welcome')}</h1>
      <p style={{ color: '#C8A2C8', fontStyle: 'italic', fontSize: '1.1rem' }}>
        {t('carloTribute')} {/* "Humblement inspiré de Saint Carlo Acutis, créé anonymement pour la gloire de Dieu" */}
      </p>
      <WorldMap />
      <button className="card">{t('startJourney')}</button>
    </div>
  );
}