import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{
      source: '/precio-smile-cdmx',
      destination: 'https://optallvision.com/blog/cuanto-cuesta-una-cirugia-smile-en-mexico/',
      permanent: true,
    }]
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['optallvision.com', 'smile.optallvision.com'],
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
