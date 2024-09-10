// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: [["@snowpack/plugin-dotenv"], ["./pspdfkit-plugin.js"]],
  mount: {
    src: "/",
    "pspdfkit-lib": "/pspdfkit-lib",
  },
};
