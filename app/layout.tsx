import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Big Christmas Tree ? Luxury Holiday',
  description:
    'A singular showcase: the Big Christmas Tree. An elegant, hyper?realistic celebration on a pure black canvas.',
  themeColor: '#000000',
  openGraph: {
    title: 'Big Christmas Tree',
    description:
      'An elegant, hyper?realistic Christmas tree on a pure black canvas.',
    type: 'website',
    url: 'https://agentic-1c38dd8b.vercel.app',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1543709539-13caf6e4d6d7?q=80&w=1600&auto=format&fit=crop',
        width: 1600,
        height: 900,
        alt: 'Hyper-realistic luxury Christmas tree'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Christmas Tree',
    description:
      'An elegant, hyper?realistic Christmas tree on a pure black canvas.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}

