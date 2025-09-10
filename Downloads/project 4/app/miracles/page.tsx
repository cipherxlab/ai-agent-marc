'use client';

import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Tag, Heart, Filter, X } from 'lucide-react';
import LilasProgress from '@/components/LilasProgress';

interface Miracle {
  id: number;
  title: string;
  location: string;
  year: string;
  description: string;
  category: string;
  coordinates: [number, number];
  verified: boolean;
  tags: string[];
}

export default function MiraclesPage() {
  const [miracles, setMiracles] = useState<Miracle[]>([]);
  const [filteredMiracles, setFilteredMiracles] = useState<Miracle[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/miracles.json')
      .then(res => res.json())
      .then(data => {
        setMiracles(data.miracles);
        setFilteredMiracles(data.miracles);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load miracles:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = miracles;

    if (searchTerm) {
      filtered = filtered.filter(miracle =>
        miracle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        miracle.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        miracle.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        miracle.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(miracle => 
        miracle.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredMiracles(filtered);
  }, [searchTerm, selectedCategory, miracles]);

  const categories = ['all', ...Array.from(new Set(miracles.map(m => m.category)))];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-celestial-blue border-t-divine-gold rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-celestial-blue">Loading divine miracles...</p>
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
            <span className="bg-gradient-to-r from-divine-gold to-celestial-blue bg-clip-text text-transparent">
              Sacred Miracles
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Documented divine interventions from around the world, each verified and preserved for the faithful
          </p>
          
          <LilasProgress 
            value={filteredMiracles.length} 
            max={miracles.length} 
            label="Miracles Available"
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
                placeholder="Search miracles, locations, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-cosmic-black/50 border border-celestial-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-divine-gold/50 focus:ring-2 focus:ring-divine-gold/20 transition-all"
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

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 bg-cosmic-black/50 border border-celestial-blue/30 rounded-lg text-white focus:outline-none focus:border-lilas/50 focus:ring-2 focus:ring-lilas/20 transition-all appearance-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-cosmic-black">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Miracles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMiracles.map((miracle) => (
            <div
              key={miracle.id}
              className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-celestial-blue/30 hover:border-divine-gold/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-divine-gold animate-pulse" />
                  {miracle.verified && (
                    <div className="w-2 h-2 bg-celestial-blue rounded-full animate-ping" />
                  )}
                </div>
                <span className="px-2 py-1 bg-lilas/20 text-lilas text-xs rounded-full">
                  {miracle.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-divine-gold mb-3 group-hover:text-celestial-blue transition-colors">
                {miracle.title}
              </h3>

              {/* Location and Year */}
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-celestial-blue" />
                  <span>{miracle.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-lilas" />
                  <span>{miracle.year}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {miracle.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {miracle.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center space-x-1 px-2 py-1 bg-celestial-blue/10 text-celestial-blue text-xs rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
                {miracle.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                    +{miracle.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Divine Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-divine-gold/5 via-transparent to-celestial-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMiracles.length === 0 && !loading && (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No miracles found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Footer Message */}
        <div className="mt-16 text-center">
          <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-celestial-blue/30 max-w-2xl mx-auto">
            <p className="text-lilas italic text-lg leading-relaxed mb-4">
              "Each miracle is a love letter from Heaven, reminding us that God is always present in our lives."
            </p>
            <p className="text-sm text-gray-400">
              In the spirit of Saint Carlo Acutis, who documented Eucharistic miracles with devotion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}