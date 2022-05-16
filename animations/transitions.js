export const smooth = (duration=2.5, delay=0) => {
  return {
    delay,
    duration,
    type: 'tween',
    ease: [0.115, 0.905, 0.32, 1],
  }
}

export const punch = (duration=1, delay=0) => {
  return {
    delay,
    duration,
    type: 'tween',
    ease: [1, 0, 0.115, 0.995],
  }
}

export const phases = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
}
