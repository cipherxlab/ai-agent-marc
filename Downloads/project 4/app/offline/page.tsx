'use client';

import React from 'react';
import { Wifi, Heart, Book, Map } from 'lucide-react';
import SeraphimLogo from '@/components/SeraphimLogo';

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        {/* Seraphim Logo */}
        <div className="mb-8 flex justify-center">
          <SeraphimLogo className="w-24 h-24" />
        </div>

        {/* Offline Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-cosmic-black/50 rounded-full flex items-center justify-center mx-auto border-2 border-celestial-blue/30">
            <Wifi className="w-10 h-10 text-celestial-blue opacity-50" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-celestial-blue to-divine-gold bg-clip-text text-transparent">
            You're Offline
          </span>
        </h1>

        {/* Message */}
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Don't worry! Even without internet, your faith journey continues. 
          Some content is available offline thanks to our Progressive Web App technology.
        </p>

        {/* Available Offline Content */}
        <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-celestial-blue/30 mb-8">
          <h2 className="text-xl font-semibold text-celestial-blue mb-6">Available Offline</h2>
          
          <div className="grid gap-4">
            <div className="flex items-center space-x-4 p-4 bg-cosmic-black/30 rounded-lg border border-divine-gold/20">
              <Book className="w-6 h-6 text-divine-gold" />
              <div className="text-left">
                <h3 className="font-semibold text-divine-gold">Cached Miracles</h3>
                <p className="text-sm text-gray-400">Previously viewed miracle stories</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-cosmic-black/30 rounded-lg border border-lilas/20">
              <Map className="w-6 h-6 text-lilas" />
              <div className="text-left">
                <h3 className="font-semibold text-lilas">Pilgrimage Guides</h3>
                <p className="text-sm text-gray-400">Downloaded spiritual path information</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-cosmic-black/30 rounded-lg border border-celestial-blue/20">
              <Heart className="w-6 h-6 text-celestial-blue" />
              <div className="text-left">
                <h3 className="font-semibold text-celestial-blue">Spiritual Resources</h3>
                <p className="text-sm text-gray-400">Core app functionality and prayers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Spiritual Message */}
        <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-lilas/30 mb-8">
          <p className="text-lilas italic text-lg leading-relaxed mb-4">
            "Be still and know that I am God." - Psalm 46:10
          </p>
          <p className="text-sm text-gray-400">
            Sometimes disconnection from the digital world brings us closer to the divine. 
            Use this time for prayer, reflection, and spiritual contemplation.
          </p>
        </div>

        {/* Reconnection Instructions */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">
            When you're back online, refresh this page to access all features
          </p>
          
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-celestial-blue to-divine-gold hover:from-divine-gold hover:to-celestial-blue text-cosmic-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Wifi className="w-4 h-4" />
            <span>Try Reconnecting</span>
          </button>
        </div>

        {/* Divine Light Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-celestial-blue/10 to-transparent animate-pulse"
              style={{
                left: `${30 + i * 20}%`,
                animationDelay: `${i * 1}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}