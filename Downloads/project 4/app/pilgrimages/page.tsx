'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Mountain, Heart, Filter, Search, X } from 'lucide-react';
import LilasProgress from '@/components/LilasProgress';

interface Pilgrimage {
  id: number;
  name: string;
  country: string;
  distance: string;
  duration: string;
  difficulty: string;
  description: string;
  coordinates: [number, number];
  highlights: string[];
  spiritualFocus: string;
  lilasBloom: string;
}

export default function PilgrimagesPage() {
  const [pilgrimages, setPilgrimages] = useState<Pilgrimage[]>([]);
  const [filteredPilgrimages, setFilteredPilgrimages] = useState<Pilgrimage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/pilgrimages.json')
      .then(res => res.json())
      .then(data => {
        setPilgrimages(data.pilgrimages);
        setFilteredPilgrimages(data.pilgrimages);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load pilgrimages:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = pilgrimages;

    if (searchTerm) {
      filtered = filtered.filter(pilgrimage =>
        pilgrimage.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pilgrimage.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pilgrimage.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pilgrimage.spiritualFocus.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(pilgrimage => 
        pilgrimage.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
      );
    }

    setFilteredPilgrimages(filtered);
  }, [searchTerm, selectedDifficulty, pilgrimages]);

  const difficulties = ['all', ...Array.from(new Set(pilgrimages.map(p => p.difficulty)))];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400 bg-green-400/20';
      case 'moderate': return 'text-yellow-400 bg-yellow-400/20';
      case 'challenging': return 'text-orange-400 bg-orange-400/20';
      case 'very challenging': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-lilas border-t-divine-gold rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lilas">Loading sacred pilgrimages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-lilas to-celestial-blue bg-clip-text text-transparent">
              Sacred Pilgrimages
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Spiritual paths adorned with mystical lilas blooms, guiding souls through transformative journeys to divine encounters
          </p>
          
          <LilasProgress 
            value={filteredPilgrimages.length} 
            max={pilgrimages.length} 
            label="Pilgrimage Routes Available"
            className="max-w-md mx-auto"
          />
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search pilgrimages, countries, or spiritual focus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-cosmic-black/50 border border-lilas/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-celestial-blue/50 focus:ring-2 focus:ring-celestial-blue/20 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Difficulty Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="pl-10 pr-8 py-3 bg-cosmic-black/50 border border-lilas/30 rounded-lg text-white focus:outline-none focus:border-celestial-blue/50 focus:ring-2 focus:ring-celestial-blue/20 transition-all appearance-none cursor-pointer"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty} className="bg-cosmic-black">
                    {difficulty === 'all' ? 'All Difficulties' : difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Pilgrimages Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredPilgrimages.map((pilgrimage) => (
            <div
              key={pilgrimage.id}
              className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-lilas/30 hover:border-celestial-blue/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group relative overflow-hidden"
            >
              {/* Lilas Bloom Background Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-lilas/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center space-x-3">
                  <Mountain className="w-6 h-6 text-lilas animate-pulse" />
                  <div>
                    <h3 className="text-2xl font-bold text-celestial-blue group-hover:text-divine-gold transition-colors">
                      {pilgrimage.name}
                    </h3>
                    <p className="text-lilas text-sm">{pilgrimage.country}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(pilgrimage.difficulty)}`}>
                  {pilgrimage.difficulty}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                <div className="bg-cosmic-black/30 rounded-lg p-3 border border-celestial-blue/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <MapPin className="w-4 h-4 text-celestial-blue" />
                    <span className="text-xs text-gray-400">Distance</span>
                  </div>
                  <p className="text-white font-semibold">{pilgrimage.distance}</p>
                </div>
                <div className="bg-cosmic-black/30 rounded-lg p-3 border border-lilas/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4 text-lilas" />
                    <span className="text-xs text-gray-400">Duration</span>
                  </div>
                  <p className="text-white font-semibold">{pilgrimage.duration}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                {pilgrimage.description}
              </p>

              {/* Spiritual Focus */}
              <div className="mb-6 relative z-10">
                <h4 className="text-divine-gold font-semibold mb-2 flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Spiritual Focus</span>
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  {pilgrimage.spiritualFocus}
                </p>
              </div>

              {/* Lilas Bloom */}
              <div className="mb-6 relative z-10">
                <h4 className="text-lilas font-semibold mb-2 flex items-center space-x-2">
                  <div className="w-4 h-4 bg-lilas rounded-full animate-pulse" />
                  <span>Mystical Lilas Blooms</span>
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  {pilgrimage.lilasBloom}
                </p>
              </div>

              {/* Highlights */}
              <div className="relative z-10">
                <h4 className="text-celestial-blue font-semibold mb-3">Sacred Highlights</h4>
                <div className="space-y-2">
                  {pilgrimage.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-divine-gold rounded-full animate-pulse" />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divine Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-lilas/5 via-transparent to-celestial-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPilgrimages.length === 0 && !loading && (
          <div className="text-center py-12">
            <Mountain className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No pilgrimages found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Footer Message */}
        <div className="mt-16 text-center">
          <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-lilas/30 max-w-3xl mx-auto">
            <p className="text-lilas italic text-lg leading-relaxed mb-4">
              "The journey of a thousand miles begins with a single step, guided by faith and adorned with divine beauty."
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Each pilgrimage path is blessed with mystical lilas blooms, nature's way of marking sacred ground
            </p>
            <div className="flex justify-center space-x-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-lilas rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}