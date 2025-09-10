'use client';

import React from 'react';
import { Heart, Globe, Shield, Code, Sparkles, Users } from 'lucide-react';
import SeraphimLogo from '@/components/SeraphimLogo';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <SeraphimLogo className="w-24 h-24" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-divine-gold to-celestial-blue bg-clip-text text-transparent">
              About Seraphina
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A spiritual Christian encyclopedia created anonymously in honor of Saint Carlo Acutis, 
            the patron saint of the internet and computer programmers
          </p>
        </div>

        {/* Saint Carlo Acutis Section */}
        <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-divine-gold/30 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="w-6 h-6 text-divine-gold animate-pulse" />
            <h2 className="text-2xl font-bold text-divine-gold">Saint Carlo Acutis Legacy</h2>
          </div>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-celestial-blue">Carlo Acutis (1991-2006)</strong> was a young Italian Catholic 
              who used his passion for technology to spread the Gospel and document Eucharistic miracles around the world. 
              Beatified in 2020 and canonized in 2024, he became the first millennial saint and the patron saint of the internet.
            </p>
            
            <p>
              Carlo created a website cataloging Eucharistic miracles, believing that "the Eucharist is the highway to heaven." 
              His famous quote, <em className="text-lilas">"We are all born as originals, but many of us die as photocopies,"</em> 
              reminds us to live authentically in God's love.
            </p>
            
            <p>
              This project, <strong className="text-celestial-blue">Seraphina</strong>, humbly carries forward Carlo's vision 
              of using technology to bring people closer to God, documenting not only Eucharistic miracles but all forms of 
              divine intervention and sacred pilgrimages that lead souls to heaven.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-celestial-blue/30">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-6 h-6 text-celestial-blue" />
              <h2 className="text-2xl font-bold text-celestial-blue">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To create a comprehensive, accessible, and beautiful digital encyclopedia of Christian miracles, 
              sacred pilgrimages, and spiritual resources that inspire faith and bring people closer to God, 
              following in the footsteps of Saint Carlo Acutis.
            </p>
          </div>

          <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-lilas/30">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="w-6 h-6 text-lilas" />
              <h2 className="text-2xl font-bold text-lilas">Our Vision</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A world where technology serves as a bridge to the divine, where every person, regardless of location 
              or circumstance, can access spiritual resources, discover God's miracles, and find their path to heaven 
              through sacred pilgrimages adorned with mystical beauty.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-celestial-blue to-divine-gold bg-clip-text text-transparent">
              Built with Divine Inspiration
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-celestial-blue/30">
              <Globe className="w-8 h-8 text-celestial-blue mb-4" />
              <h3 className="text-lg font-semibold text-celestial-blue mb-2">Global Accessibility</h3>
              <p className="text-gray-300 text-sm">
                Lightweight PWA optimized for low-bandwidth areas, ensuring everyone can access divine content
              </p>
            </div>

            <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-divine-gold/30">
              <Shield className="w-8 h-8 text-divine-gold mb-4" />
              <h3 className="text-lg font-semibold text-divine-gold mb-2">Privacy First</h3>
              <p className="text-gray-300 text-sm">
                GDPR-compliant with no tracking, respecting your privacy as a sacred trust
              </p>
            </div>

            <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-lilas/30">
              <Users className="w-8 h-8 text-lilas mb-4" />
              <h3 className="text-lg font-semibold text-lilas mb-2">Anonymous Community</h3>
              <p className="text-gray-300 text-sm">
                Share testimonies and create spiritual content while maintaining complete anonymity
              </p>
            </div>

            <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-celestial-blue/30">
              <Heart className="w-8 h-8 text-celestial-blue mb-4" />
              <h3 className="text-lg font-semibold text-celestial-blue mb-2">Verified Miracles</h3>
              <p className="text-gray-300 text-sm">
                Carefully documented and verified miraculous events from around the world
              </p>
            </div>

            <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-divine-gold/30">
              <Sparkles className="w-8 h-8 text-divine-gold mb-4" />
              <h3 className="text-lg font-semibold text-divine-gold mb-2">Sacred Pilgrimages</h3>
              <p className="text-gray-300 text-sm">
                Spiritual paths adorned with mystical lilas blooms, guiding souls to divine encounters
              </p>
            </div>

            <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-lilas/30">
              <Code className="w-8 h-8 text-lilas mb-4" />
              <h3 className="text-lg font-semibold text-lilas mb-2">Open Source</h3>
              <p className="text-gray-300 text-sm">
                MIT licensed and open source, allowing others to contribute to God's work
              </p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-celestial-blue/30 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Code className="w-6 h-6 text-celestial-blue" />
            <h2 className="text-2xl font-bold text-celestial-blue">Technical Excellence</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-divine-gold mb-3">Performance</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Pages under 25KB for global accessibility</li>
                <li>• Progressive Web App with offline capabilities</li>
                <li>• Optimized images (WebP) and SVG graphics</li>
                <li>• Service worker for reliable performance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-lilas mb-3">Technology Stack</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Next.js 13+ with App Router</li>
                <li>• Tailwind CSS for responsive design</li>
                <li>• TypeScript for code reliability</li>
                <li>• JSON-based data storage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Anonymous Creation */}
        <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-lilas/30 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Heart className="w-6 h-6 text-lilas animate-pulse" />
            <h2 className="text-2xl font-bold text-lilas">Anonymous Creation</h2>
          </div>
          
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              This project was created anonymously, following the example of countless saints and mystics who 
              worked for God's glory rather than personal recognition. Like the anonymous builders of great cathedrals, 
              we offer this work as a humble gift to the Church and to all seeking souls.
            </p>
            
            <p>
              <em className="text-celestial-blue">"Let your light shine before others, that they may see your good deeds 
              and glorify your Father in heaven."</em> - Matthew 5:16
            </p>
            
            <p>
              We ask for your prayers rather than your praise, that this work may bear fruit in the lives of those 
              who encounter it, and that it may serve as a small stepping stone on their journey to eternal life.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cosmic-black/80 to-cosmic-black/60 backdrop-blur-sm rounded-2xl p-8 border border-divine-gold/30">
            <h2 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-divine-gold to-celestial-blue bg-clip-text text-transparent">
                Join the Mission
              </span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Help us document God's miracles, share your pilgrimage experiences, and build a community 
              that brings heaven closer to earth through technology.
            </p>
            <div className="flex justify-center items-center space-x-2">
              <Heart className="w-4 h-4 text-divine-gold animate-pulse" />
              <span className="text-sm text-gray-400">Ad Majorem Dei Gloriam</span>
              <Heart className="w-4 h-4 text-divine-gold animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}