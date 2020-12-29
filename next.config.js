const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/practicaldev/image/fetch/',
  },
});
