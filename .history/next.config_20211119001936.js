module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["voltauxui.cl"],
  },
};

const withMDX = require("@zeit/next-mdx")();
module.exports = withMDX();
