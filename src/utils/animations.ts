export const fadeIn = (delay: number = 0) => ({
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      delay 
    } 
  }
});

export const slideInFromLeft = (delay: number = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20, 
      delay 
    } 
  }
});

export const slideInFromRight = (delay: number = 0) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20, 
      delay 
    } 
  }
});

export const slideInFromBottom = (delay: number = 0) => ({
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20, 
      delay 
    } 
  }
});

export const scaleIn = (delay: number = 0) => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20, 
      delay 
    } 
  }
});