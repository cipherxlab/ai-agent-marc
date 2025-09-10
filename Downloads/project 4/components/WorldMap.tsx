'use client';

import React, { useEffect, useState } from 'react';
import { MapPin, Heart } from 'lucide-react';

interface Miracle {
  id: number;
  title: string;
  location: string;
  coordinates: [number, number];
  category: string;
}

export default function WorldMap() {
  const [miracles, setMiracles] = useState<Miracle[]>([]);
  const [selectedMiracle, setSelectedMiracle] = useState<Miracle | null>(null);

  useEffect(() => {
    fetch('/data/miracles.json')
      .then(res => res.json())
      .then(data => setMiracles(data.miracles))
      .catch(err => console.error('Failed to load miracles:', err));
  }, []);

  // Simple world map representation using CSS
  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-celestial-blue/20 to-cosmic-black/40 rounded-xl overflow-hidden border border-celestial-blue/30">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 1000 500" className="w-full h-full">
          {/* Simplified world continents */}
          <path
            d="M150 200 Q200 180 250 200 Q300 220 350 200 Q400 180 450 200 L450 300 Q400 320 350 300 Q300 280 250 300 Q200 320 150 300 Z"
            fill="#87CEEB"
            opacity="0.3"
          />
          <path
            d="M500 150 Q550 130 600 150 Q650 170 700 150 Q750 130 800 150 L800 250 Q750 270 700 250 Q650 230 600 250 Q550 270 500 250 Z"
            fill="#87CEEB"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Miracle Markers */}
      <div className="absolute inset-0">
        {miracles.map((miracle) => {
          // Convert coordinates to percentage positions (simplified)
          const x = ((miracle.coordinates[1] + 180) / 360) * 100;
          const y = ((90 - miracle.coordinates[0]) / 180) * 100;

          return (
            <div
              key={miracle.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={() => setSelectedMiracle(miracle)}
            >
              <div className="relative">
                {/* Pulsing divine aura */}
                <div className="absolute inset-0 w-6 h-6 bg-divine-gold/30 rounded-full animate-ping" />
                <div className="absolute inset-0 w-4 h-4 bg-divine-gold/50 rounded-full animate-pulse" />
                
                {/* Miracle marker */}
                <div className="relative w-3 h-3 bg-divine-gold rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-transform duration-300">
                  <Heart className="w-2 h-2 text-white absolute top-0.5 left-0.5 transform -translate-x-1/2 -translate-y-1/2" />
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-cosmic-black/90 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap border border-celestial-blue/30">
                    <div className="font-semibold text-divine-gold">{miracle.title}</div>
                    <div className="text-celestial-blue">{miracle.location}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Miracle Info */}
      {selectedMiracle && (
        <div className="absolute bottom-4 left-4 right-4 bg-cosmic-black/90 backdrop-blur-sm rounded-lg p-4 border border-celestial-blue/30">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-divine-gold mb-1">
                {selectedMiracle.title}
              </h3>
              <p className="text-celestial-blue text-sm mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                {selectedMiracle.location}
              </p>
              <span className="inline-block px-2 py-1 bg-lilas/20 text-lilas text-xs rounded-full">
                {selectedMiracle.category}
              </span>
            </div>
            <button
              onClick={() => setSelectedMiracle(null)}
              className="text-gray-400 hover:text-white transition-colors ml-4"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Divine light rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-divine-gold/20 to-transparent animate-pulse"
            style={{
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}