const dev = process.env.NODE_ENV !== 'production'

export const server = dev
  ? 'http://localhost:1212'
  : 'https://radiance-next.vercel.app'
