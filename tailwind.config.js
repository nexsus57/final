/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#0D2B4F',
        'brand-blue-dark': '#081F3A',
        'brand-yellow': '#FFC107',
        'brand-gray': '#F8F9FA',
        
        // Admin Panel Colors
        'admin-bg': '#F1F5F9', // Light gray background
        'admin-sidebar': '#1E293B', // Dark slate
        'admin-card': '#FFFFFF',
        'admin-text': '#334155', // Dark text
        'admin-text-light': '#64748B', // Lighter text
        'admin-accent': '#3B82F6', // Blue accent
        'admin-accent-hover': '#2563EB',
        'admin-border': '#E2E8F0',
      }
    },
  },
  plugins: [],
}