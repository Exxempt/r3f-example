/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // temp for shadcn compile dependency issues.
        ignoreBuildErrors: true,
      },
}

module.exports = nextConfig
