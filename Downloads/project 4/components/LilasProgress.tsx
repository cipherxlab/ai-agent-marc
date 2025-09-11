import React from 'react';

const LilasProgress = ({ progress }: { progress: number }) => {
  return (
    <div style={{ background: '#0A0A0A', padding: '1rem', textAlign: 'center' }}>
      <p style={{ color: '#C8A2C8', fontFamily: 'Playfair Display', fontSize: '1.2rem' }}>
        Votre Chemin de Foi
      </p>
      <div style={{
        width: '80%',
        margin: '0 auto',
        height: '8px',
        background: '#87CEEB',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#C8A2C8',
          transition: 'width 0.5s ease-in-out'
        }} />
      </div>
      <p style={{ color: '#FFD700', fontSize: '0.9rem' }}>
        Méditez pour illuminer votre chemin avec lumière divine
      </p>
    </div>
  );
};

export default LilasProgress;