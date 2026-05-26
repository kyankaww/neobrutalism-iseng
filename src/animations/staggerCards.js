import gsap from 'gsap'

import { ScrollTrigger }
  from 'gsap/ScrollTrigger'

gsap.registerPlugin(
  ScrollTrigger
)

export const staggerCards = (
  selector,
  trigger
) => {

  const isMobile =
    window.innerWidth < 768

  const reduceMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

  gsap.fromTo(
    selector,

    {
      opacity: 0,

      y:
        reduceMotion
          ? 0
          : isMobile
            ? 20
            : 60,

      scale:
        reduceMotion
          ? 1
          : isMobile
            ? 1
            : 0.96,
    },

    {
      opacity: 1,

      y: 0,

      scale: 1,

      duration:
        reduceMotion
          ? 0.3
          : isMobile
            ? 0.6
            : 1,

      stagger:
        reduceMotion
          ? 0
          : isMobile
            ? 0.04
            : 0.12,

      ease: 'power3.out',

      scrollTrigger: {
        trigger,
        start: 'top 90%',
        once: true,
      },
    }
  )
}