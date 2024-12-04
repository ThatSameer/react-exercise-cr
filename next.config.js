/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // fileName?: boolean,
      // Empty by default.
      // topLevelImportPaths?: string[],
      // Defaults to ["index"].
      // meaninglessFileNames?: string[],
      // Empty by default.
      // namespace?: string,
      // Not supported yet.
      // minify?: boolean,
      // Not supported yet.
      // transpileTemplateLiterals?: boolean,
      // Not supported yet.
      // pure?: boolean,
    },
  },
};

module.exports = nextConfig;
