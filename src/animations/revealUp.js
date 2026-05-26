import gsap from 'gsap'

import { ScrollTrigger }
  from 'gsap/ScrollTrigger'

gsap.registerPlugin(
  ScrollTrigger
)

export const revealUp = (
  elements,
  options = {}
) => {

  const isMobile =
    window.innerWidth < 768

  const reduceMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

  gsap.fromTo(
    elements,

    {
      opacity: 0,

      y:
        reduceMotion
          ? 0
          : isMobile
            ? 24
            : 80,
    },

    {
      opacity: 1,
      y: 0,

      duration:
        reduceMotion
          ? 0.3
          : isMobile
            ? 0.7
            : 1.2,

      stagger:
        reduceMotion
          ? 0
          : isMobile
            ? 0.06
            : 0.15,

      ease: 'power3.out',

      scrollTrigger: {
        trigger:
          options.trigger ||
          elements,

        start:
          options.start ||
          'top 90%',

        once: true,
      },
    }
  )
}