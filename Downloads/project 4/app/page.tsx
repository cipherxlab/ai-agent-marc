'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Heart, Map, Users } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <h1 style={{ 
        color: '#4b0082', 
        textAlign: 'center', 
        marginBottom: '2rem',
        fontFamily: 'Inter, sans-serif',
        fontSize: '2em',
        fontWeight: '700'
      }}>
        SERAPHINA
      </h1>
      
      <p style={{ 
        color: '#1e3a8a', 
        textAlign: 'center', 
        marginBottom: '2rem',
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.2em',
        lineHeight: '1.7',
        fontWeight: '400'
      }}>
        Encyclopédie Spirituelle Chrétienne
      </p>

      <div style={{ 
        backgroundColor: '#e6e6fa', 
        border: '2px solid #4b0082', 
        borderRadius: '8px', 
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        marginBottom: '2rem'
      }}>
        <p style={{ 
          color: '#4b0082', 
          fontStyle: 'italic', 
          textAlign: 'center',
          margin: 0,
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.1em',
          fontWeight: '500'
        }}>
          "Portant humblement le flambeau de Saint Carlo, anonymement pour Dieu"
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div className="spiritual-card">
          <Heart style={{ color: '#4b0082', marginBottom: '1rem' }} size={32} />
          <h3 style={{ 
            color: '#4b0082', 
            marginBottom: '1rem',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.5em',
            fontWeight: '600'
          }}>
            Miracles Sacrés
          </h3>
          <p style={{ 
            color: '#1e3a8a',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1em',
            lineHeight: '1.6'
          }}>
            Découvrez les miracles documentés du monde entier, chacun vérifié et catalogué avec révérence divine.
          </p>
        </div>

        <div className="spiritual-card">
          <Map style={{ color: '#4b0082', marginBottom: '1rem' }} size={32} />
          <h3 style={{ 
            color: '#4b0082', 
            marginBottom: '1rem',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.5em',
            fontWeight: '600'
          }}>
            Pèlerinages Sacrés
          </h3>
          <p style={{ 
            color: '#1e3a8a',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1em',
            lineHeight: '1.6'
          }}>
            Explorez les chemins spirituels ornés de fleurs de lilas mystiques, guidant les âmes vers des rencontres divines.
          </p>
        </div>

        <div className="spiritual-card">
          <Users style={{ color: '#4b0082', marginBottom: '1rem' }} size={32} />
          <h3 style={{ 
            color: '#4b0082', 
            marginBottom: '1rem',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.5em',
            fontWeight: '600'
          }}>
            Communauté Fidèle
          </h3>
          <p style={{ 
            color: '#1e3a8a',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1em',
            lineHeight: '1.6'
          }}>
            Rejoignez les croyants anonymes partageant des témoignages et se soutenant mutuellement dans la foi.
          </p>
        </div>
      </div>
    </div>
  );
}