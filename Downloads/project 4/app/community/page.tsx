'use client';

import React, { useState } from 'react';
import { Users, MessageCircle, Image, Send, Heart, Sparkles, Download, Share2 } from 'lucide-react';
import LilasProgress from '@/components/LilasProgress';

export default function CommunityPage() {
  const [testimonial, setTestimonial] = useState('');
  const [memeText, setMemeText] = useState('');
  const [selectedMemeTemplate, setSelectedMemeTemplate] = useState('seraphim');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setTestimonial('');
    setIsSubmitting(false);
    alert('Thank you for sharing your testimony anonymously. May God bless you! 🙏');
  };

  const memeTemplates = [
    {
      id: 'seraphim',
      name: 'Divine Seraphim',
      description: 'Six-winged angels proclaiming God\'s glory',
      bgColor: 'from-celestial-blue to-divine-gold'
    },
    {
      id: 'carlo',
      name: 'Saint Carlo Tribute',
      description: 'Honoring the patron saint of the internet',
      bgColor: 'from-divine-gold to-lilas'
    },
    {
      id: 'miracle',
      name: 'Miracle Moment',
      description: 'Celebrating divine interventions',
      bgColor: 'from-lilas to-celestial-blue'
    },
    {
      id: 'pilgrimage',
      name: 'Sacred Journey',
      description: 'Pilgrimage paths with lilas blooms',
      bgColor: 'from-celestial-blue to-cosmic-black'
    }
  ];

  const generateMeme = () => {
    if (!memeText.trim()) return;
    
    // In a real app, this would generate an actual meme image
    alert(`Meme generated with text: "${memeText}" using ${selectedMemeTemplate} template! 🎨`);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-celestial-blue to-divine-gold bg-clip-text text-transparent">
              Faithful Community
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join anonymous believers sharing testimonies, creating spiritual memes, and supporting each other in faith
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <LilasProgress value={1247} max={2000} label="Community Members" />
            <LilasProgress value={89} max={100} label="Testimonies Shared" />
            <LilasProgress value={156} max={200} label="Memes Created" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Anonymous Testimony Form */}
          <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-celestial-blue/30">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="w-6 h-6 text-celestial-blue" />
              <h2 className="text-2xl font-bold text-celestial-blue">Share Your Testimony</h2>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Share your spiritual experiences anonymously. Your testimony might inspire others on their faith journey.
            </p>

            <form onSubmit={handleTestimonialSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Anonymous Testimony
                </label>
                <textarea
                  value={testimonial}
                  onChange={(e) => setTestimonial(e.target.value)}
                  placeholder="Share how God has worked in your life, a miracle you've witnessed, or a moment of divine grace..."
                  rows={6}
                  className="w-full px-4 py-3 bg-cosmic-black/50 border border-celestial-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-divine-gold/50 focus:ring-2 focus:ring-divine-gold/20 transition-all resize-none"
                  required
                />
              </div>

              <div className="bg-lilas/10 border border-lilas/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Heart className="w-4 h-4 text-lilas" />
                  <span className="text-sm font-medium text-lilas">Privacy Promise</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Your testimony is completely anonymous. We don't collect any personal information, 
                  following GDPR compliance and respecting your privacy as a sacred trust.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !testimonial.trim()}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-celestial-blue to-divine-gold hover:from-divine-gold hover:to-celestial-blue text-cosmic-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-cosmic-black border-t-transparent rounded-full animate-spin" />
                    <span>Sharing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Share Anonymously</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Spiritual Meme Generator */}
          <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-lilas/30">
            <div className="flex items-center space-x-3 mb-6">
              <Image className="w-6 h-6 text-lilas" />
              <h2 className="text-2xl font-bold text-lilas">Spiritual Meme Kit</h2>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Create inspiring spiritual memes to share faith with humor and joy, just as Saint Carlo would have loved!
            </p>

            <div className="space-y-6">
              {/* Meme Template Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Choose Template
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {memeTemplates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedMemeTemplate(template.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedMemeTemplate === template.id
                          ? 'border-lilas bg-lilas/10'
                          : 'border-gray-600 hover:border-lilas/50'
                      }`}
                    >
                      <div className={`w-full h-16 bg-gradient-to-r ${template.bgColor} rounded mb-2 opacity-70`} />
                      <h3 className="text-sm font-semibold text-white">{template.name}</h3>
                      <p className="text-xs text-gray-400">{template.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Meme Text Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Inspirational Text
                </label>
                <textarea
                  value={memeText}
                  onChange={(e) => setMemeText(e.target.value)}
                  placeholder="Enter your spiritual message, Bible verse, or inspirational quote..."
                  rows={3}
                  className="w-full px-4 py-3 bg-cosmic-black/50 border border-lilas/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-celestial-blue/50 focus:ring-2 focus:ring-celestial-blue/20 transition-all resize-none"
                />
              </div>

              {/* Meme Preview */}
              <div className="bg-cosmic-black/30 rounded-lg p-4 border border-gray-600">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Preview</h4>
                <div className={`w-full h-32 bg-gradient-to-r ${memeTemplates.find(t => t.id === selectedMemeTemplate)?.bgColor} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-cosmic-black/40" />
                  <p className="text-white text-center font-bold text-sm px-4 relative z-10">
                    {memeText || 'Your inspirational text will appear here...'}
                  </p>
                  <Sparkles className="absolute top-2 right-2 w-4 h-4 text-divine-gold animate-pulse" />
                </div>
              </div>

              {/* Generate Button */}
              <div className="flex space-x-3">
                <button
                  onClick={generateMeme}
                  disabled={!memeText.trim()}
                  className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-lilas to-celestial-blue hover:from-celestial-blue hover:to-lilas text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Meme</span>
                </button>
                
                <button
                  disabled={!memeText.trim()}
                  className="flex items-center justify-center space-x-2 bg-cosmic-black/50 border border-divine-gold/30 text-divine-gold hover:bg-divine-gold/10 font-semibold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                </button>
                
                <button
                  disabled={!memeText.trim()}
                  className="flex items-center justify-center space-x-2 bg-cosmic-black/50 border border-celestial-blue/30 text-celestial-blue hover:bg-celestial-blue/10 font-semibold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-celestial-blue/30 text-center">
            <Users className="w-8 h-8 text-celestial-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-celestial-blue mb-2">1,247</h3>
            <p className="text-gray-300">Anonymous Believers</p>
          </div>
          
          <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-divine-gold/30 text-center">
            <MessageCircle className="w-8 h-8 text-divine-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-divine-gold mb-2">89</h3>
            <p className="text-gray-300">Testimonies Shared</p>
          </div>
          
          <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-6 border border-lilas/30 text-center">
            <Image className="w-8 h-8 text-lilas mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-lilas mb-2">156</h3>
            <p className="text-gray-300">Spiritual Memes Created</p>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center">
          <div className="bg-cosmic-black/50 backdrop-blur-sm rounded-xl p-8 border border-celestial-blue/30 max-w-3xl mx-auto">
            <p className="text-celestial-blue italic text-lg leading-relaxed mb-4">
              "Be it done unto me according to thy word." - Luke 1:38
            </p>
            <p className="text-sm text-gray-400 mb-4">
              In the spirit of Saint Carlo Acutis, we use technology to spread God's love and bring joy to the faithful
            </p>
            <div className="flex justify-center items-center space-x-2">
              <Heart className="w-4 h-4 text-divine-gold animate-pulse" />
              <span className="text-xs text-gray-500">Made with love, anonymously for God</span>
              <Heart className="w-4 h-4 text-divine-gold animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}