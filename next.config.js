const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // temp for shadcn compile dependency issues.
        ignoreBuildErrors: true,
      },
//  turbopack: {
 //   root: path.resolve(__dirname),
 // },
}

module.exports = nextConfig