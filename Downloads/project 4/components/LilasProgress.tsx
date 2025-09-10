'use client';

import React from 'react';

interface LilasProgressProps {
  value: number;
  max: number;
  label?: string;
  className?: string;
}

export default function LilasProgress({ value, max, label, className = "" }: LilasProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-300">{label}</span>
          <span className="text-sm text-lilas">{value}/{max}</span>
        </div>
      )}
      <div className="w-full bg-cosmic-black/50 rounded-full h-3 overflow-hidden border border-lilas/20">
        <div
          className="h-full bg-gradient-to-r from-lilas via-celestial-blue to-divine-gold rounded-full transition-all duration-700 ease-out relative overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          
          {/* Pulsing lilas glow */}
          <div className="absolute inset-0 bg-lilas/30 animate-ping rounded-full" style={{ animationDuration: '2s' }} />
        </div>
      </div>
      
      {/* Mystical particles */}
      <div className="relative -mt-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-lilas rounded-full animate-bounce opacity-60"
            style={{
              left: `${Math.min(percentage - 5 + i * 2, 95)}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.5s'
            }}
          />
        ))}
      </div>
    </div>
  );
}