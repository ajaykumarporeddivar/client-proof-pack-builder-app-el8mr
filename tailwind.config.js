/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#3B82F6', // A primary blue for actions and branding
        accent: '#F97316', // An orange accent for highlights
        statusDraft: '#FCD34D', // Yellow for 'draft' status
        statusReview: '#BEF264', // Light green for 'review' status
        statusClientReady: '#10B981', // Green for 'client-ready' status
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}