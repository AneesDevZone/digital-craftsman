/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Optimize images
  images: {
    domains: [], // Add any external image domains here
  },

  // ESLint configuration for build
  eslint: {
    // Only run ESLint on these directories during `next build`
    dirs: ['src', 'pages', 'components', 'lib', 'utils'],
    
    // WARNING: This allows production builds to successfully complete 
    // even if your project has ESLint errors.
    // Remove this if you want strict ESLint checking
    ignoreDuringBuilds: true,
  },

  // TypeScript configuration
  typescript: {
    // WARNING: This allows production builds to successfully complete 
    // even if your project has type errors.
    // Remove this if you want strict TypeScript checking
    ignoreBuildErrors: true,
  },

  // Experimental features (if needed)
  experimental: {
    // Add any experimental features here
  },
}

module.exports = nextConfig