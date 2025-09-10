import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seraphina - Spiritual Christian Encyclopedia',
  description: 'A spiritual Christian encyclopedia inspired by Saint Carlo Acutis, carrying his torch anonymously for God. Discover miracles, pilgrimages, and divine encounters.',
  keywords: 'Christian miracles free, Saint Carlo Acutis, spiritual encyclopedia, Catholic miracles, pilgrimages, faith',
  authors: [{ name: 'Anonymous', url: 'https://seraphina.app' }],
  creator: 'Anonymous for God',
  publisher: 'Seraphina',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://seraphina.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'fr-FR': '/fr-FR',
      'es-ES': '/es-ES',
      'pt-PT': '/pt-PT',
      'ar-SA': '/ar-SA',
    },
  },
  openGraph: {
    title: 'Seraphina - Spiritual Christian Encyclopedia',
    description: 'Discover divine miracles and sacred pilgrimages. Humbly carrying Saint Carlo\'s torch, anonymously for God.',
    url: 'https://seraphina.app',
    siteName: 'Seraphina',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Seraphina - Spiritual Christian Encyclopedia',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seraphina - Spiritual Christian Encyclopedia',
    description: 'Discover divine miracles and sacred pilgrimages. Humbly carrying Saint Carlo\'s torch, anonymously for God.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-cosmic-black text-white min-h-screen`}>
        <Navigation />
        <main className="relative">
          {children}
        </main>
        
        {/* Divine background effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-celestial-blue/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lilas/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-divine-gold/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </body>
    </html>
  );
}