// motion variant
export const homeVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5
    }
  }
}

export const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5
    }
  }
}