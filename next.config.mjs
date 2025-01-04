import withPlugins from "next-compose-plugins";
import withSvgr from "next-plugin-svgr";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default withPlugins([withSvgr], nextConfig);
