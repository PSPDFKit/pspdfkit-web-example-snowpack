const ncp = require("ncp").ncp;

module.exports = function () {
  return {
    name: "pspdfkit-plugin",
    async run() {
      await ncp("./node_modules/pspdfkit/dist/pspdfkit-lib", "./pspdfkit-lib");
    },
  };
};
