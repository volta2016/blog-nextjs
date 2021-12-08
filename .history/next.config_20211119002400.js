const withMDX = require("@zeit/next-mdx")({
  options: {
    mdPlugins: [],
    hastPlugins: [],
  },
});

module.exports = withMDX();

module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["voltauxui.cl"],
  },
};
