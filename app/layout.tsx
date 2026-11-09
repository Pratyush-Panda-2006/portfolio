import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AnalogTexture } from '@/components/vox/AnalogTexture';

const siteUrl = 'https://pratyushpanda.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pratyush Panda | Full-Stack Developer & AI Systems Engineer',
    template: '%s | Pratyush Panda',
  },
  description:
    'High-performance interactive visual portfolio of Pratyush Panda — National Rank #42 open-source contributor (GSSoC \'26), building autonomous agentic AI architectures, multimodal vision tools, and distributed full-stack web applications.',
  keywords: [
    'Pratyush Panda',
    'Full-Stack Developer',
    'AI Systems Engineer',
    'Agentic AI',
    'Gemini API',
    'Gemma 4 Vision',
    'CycloneWatch AI',
    'KissanAlert',
    'CAREERFORGE',
    'GSSoC 2026',
    'Nexus Spring of Code',
    'Next.js Portfolio',
    'Bhubaneswar',
    'India',
  ],
  authors: [{ name: 'Pratyush Panda', url: siteUrl }],
  creator: 'Pratyush Panda',
  publisher: 'Pratyush Panda',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pratyush Panda | Full-Stack Developer & AI Systems Engineer',
    description:
      'National Rank #42 GSSoC \'26 open-source contributor. Crafting autonomous agents, multimodal vision triage engines, and distributed web applications.',
    url: siteUrl,
    siteName: 'Pratyush Panda Portfolio',
    images: [
      {
        url: '/vox/avatar-halftone.png',
        width: 1024,
        height: 1024,
        alt: 'Pratyush Panda — Full-Stack Developer & AI Systems Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratyush Panda | Full-Stack Developer & AI Systems Engineer',
    description:
      'National Rank #42 GSSoC \'26 contributor. Crafting agentic AI systems, multimodal vision pipelines, and full-stack architectures.',
    creator: '@tf_pratyush',
    images: ['/vox/avatar-halftone.png'],
  },
  verification: {
    google: 'googlebbfea3adcb58ae52.html',
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F5EFE1',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Pratyush Panda',
      url: siteUrl,
      image: `${siteUrl}/vox/avatar-halftone.png`,
      jobTitle: 'Full-Stack Developer & AI Systems Engineer',
      sameAs: [
        'https://github.com/Pratyush-Panda-2006',
        'https://www.linkedin.com/in/pratyush-panda2006/',
        'https://instagram.com/tf_pratyush',
      ],
      description:
        'National Rank #42 GSSoC \'26 open-source contributor and full-stack engineer building agentic AI and distributed web applications.',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Pratyush Panda, Explained',
      description: 'High-performance visual journalism interactive portfolio.',
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="googlebbfea3adcb58ae52.html" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="vox-paper-bg text-ink-primary antialiased selection:bg-[#FFE600] selection:text-black">
        {/* Global analog paper wobble SVG filter */}
        <AnalogTexture />
        {children}
      </body>
    </html>
  );
}
