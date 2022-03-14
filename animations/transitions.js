export const smooth = (duration=2.5) => {
  return {
    duration: duration,
    type: 'tween',
    transition: 'var(--smooth-framer)',
  }
}