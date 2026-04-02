export const siteConfig = {
  name: 'SMB-3D',
  title: 'SMB-3D',
  description: 'Interactive 3D voxel monke viewer and trait playground built with Next.js, React Three Fiber, Radix UI, and Tailwind CSS.',
  url: 'https://exxempt.dev',
  ogImage: 'https://avatars.githubusercontent.com/u/46376436?v=4',
  links: {
    twitter: 'https://twitter.com/exxemptdev',
    github: 'https://github.com/exxempt',
  },
} as const

export type SiteConfig = typeof siteConfig