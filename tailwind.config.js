/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          light: '#FAF7EE',
          DEFAULT: '#EAE6DF',
          newsprint: '#EAE6DF',
          aged: '#E2DDD4',
          card: '#FAF8F5',
          border: '#D5CFC3',
          dark: '#111111',
        },
        ink: {
          pure: '#111111',
          DEFAULT: '#111111',
          muted: '#4A463F',
          faint: '#7A756D',
        },
        marker: {
          yellow: '#FFE600',
          red: '#DC2626',
          blue: '#1D4ED8',
          orange: '#F59E0B',
          green: '#16A34A',
        },
        tape: '#E6DCB8',
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Courier Prime"', 'monospace'],
        sans: ['Inter', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        paper: '0 4px 20px -2px rgba(17, 17, 17, 0.08), 0 2px 6px -1px rgba(17, 17, 17, 0.04)',
        card: '0 10px 30px -4px rgba(17, 17, 17, 0.12), 0 4px 10px -2px rgba(17, 17, 17, 0.06)',
        polaroid: '0 14px 40px -8px rgba(0, 0, 0, 0.25), 0 4px 12px -2px rgba(0, 0, 0, 0.12)',
        slap: '0 24px 48px -12px rgba(0, 0, 0, 0.3), 0 8px 16px -4px rgba(0, 0, 0, 0.15)',
        tape: '0 2px 4px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
