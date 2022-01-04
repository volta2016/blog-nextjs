const withMDX = require("@zeit/next-mdx")({
  options: {
    mdPlugins: [],
    hastPlugins: [],
  },
});

const nextConfig = {
  /** Tell Next that it should render MDX files as page if they're in the page directory. */
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
};

module.exports = withMDX(nextConfig);

module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["voltauxui.cl"],
  },
};
