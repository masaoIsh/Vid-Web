/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'drive.google.com',
      'res.cloudinary.com',
      // Add other image domains here if needed
    ],
  },
};

module.exports = nextConfig; 