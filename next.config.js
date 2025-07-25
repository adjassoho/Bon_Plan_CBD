/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  // Configuration des variables d'environnement pour le déploiement standalone
  env: {
    // Variables serveur critiques
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,

    // Variables Stripe
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,

    // Variables Email (optionnelles)
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
    EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
    EMAIL_FROM: process.env.EMAIL_FROM,

    // Variables de configuration
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_SHARP_PATH: process.env.NEXT_SHARP_PATH,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
    domains: ['localhost', 'bon-plan-cbd.fr'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'framer-motion', 'swiper'],
  },
  // Configuration webpack simplifiée pour éviter les erreurs
  webpack: (config) => {
    return config
  },
}

// Pour le déploiement standalone, on désactive le bundle analyzer
module.exports = nextConfig
