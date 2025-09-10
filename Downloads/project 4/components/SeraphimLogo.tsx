'use client';

import React from 'react';

export default function SeraphimLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Divine Light Aura */}
        <defs>
          <radialGradient id="divineAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#87CEEB" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C8A2C8" stopOpacity="0.1" />
          </radialGradient>
          <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#C8A2C8" />
          </linearGradient>
        </defs>
        
        {/* Aura Circle */}
        <circle cx="50" cy="50" r="45" fill="url(#divineAura)" className="animate-pulse" />
        
        {/* Seraphim Wings - Six Wings */}
        {/* Upper Wings (covering face) */}
        <path
          d="M30 25 Q20 15 15 25 Q20 35 30 30 Q40 20 30 25"
          fill="url(#wingGradient)"
          className="animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        />
        <path
          d="M70 25 Q80 15 85 25 Q80 35 70 30 Q60 20 70 25"
          fill="url(#wingGradient)"
          className="animate-bounce"
          style={{ animationDelay: '0.5s', animationDuration: '3s' }}
        />
        
        {/* Middle Wings (for flying) */}
        <path
          d="M25 45 Q10 40 8 50 Q10 60 25 55 Q35 50 25 45"
          fill="url(#wingGradient)"
          className="animate-bounce"
          style={{ animationDelay: '1s', animationDuration: '3s' }}
        />
        <path
          d="M75 45 Q90 40 92 50 Q90 60 75 55 Q65 50 75 45"
          fill="url(#wingGradient)"
          className="animate-bounce"
          style={{ animationDelay: '1.5s', animationDuration: '3s' }}
        />
        
        {/* Lower Wings (covering feet) */}
        <path
          d="M35 70 Q25 80 20 70 Q25 60 35 65 Q45 75 35 70"
          fill="url(#wingGradient)"
          className="animate-bounce"
          style={{ animationDelay: '2s', animationDuration: '3s' }}
        />
        <path
          d="M65 70 Q75 80 80 70 Q75 60 65 65 Q55 75 65 70"
          fill="url(#wingGradient)"
          className="animate-bounce"
          style={{ animationDelay: '2.5s', animationDuration: '3s' }}
        />
        
        {/* Central Divine Form */}
        <circle cx="50" cy="50" r="8" fill="#FFD700" className="animate-pulse" />
        
        {/* Sacred Flames */}
        <path
          d="M50 35 Q45 30 50 25 Q55 30 50 35"
          fill="#FFD700"
          className="animate-pulse"
          style={{ animationDelay: '0.3s' }}
        />
        <path
          d="M50 65 Q45 70 50 75 Q55 70 50 65"
          fill="#FFD700"
          className="animate-pulse"
          style={{ animationDelay: '0.6s' }}
        />
        
        {/* Lilas Mystical Accents */}
        <circle cx="35" cy="35" r="2" fill="#C8A2C8" className="animate-ping" />
        <circle cx="65" cy="35" r="2" fill="#C8A2C8" className="animate-ping" style={{ animationDelay: '0.5s' }} />
        <circle cx="35" cy="65" r="2" fill="#C8A2C8" className="animate-ping" style={{ animationDelay: '1s' }} />
        <circle cx="65" cy="65" r="2" fill="#C8A2C8" className="animate-ping" style={{ animationDelay: '1.5s' }} />
      </svg>
    </div>
  );
}