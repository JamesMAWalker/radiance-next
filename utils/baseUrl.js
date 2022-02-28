export const baseUrlPng = (
  slug,
  quality = 'good'
) => {
  return `https://res.cloudinary.com/radiance-photography-studio/image/upload/f_auto,q_auto:${quality}/v1640679114/${slug}.png`
}
