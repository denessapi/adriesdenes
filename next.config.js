const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  optimizeImages: true,
  optimizeImagesInDev: true,
  defaultImageLoader: "responsive-loader",
  responsive: {
    adapter: require("responsive-loader/sharp"),
    sizes: [320, 640, 960, 1200, 1800, 2400],
    placeholder: true,
    placeholderSize: 20
  }
});
