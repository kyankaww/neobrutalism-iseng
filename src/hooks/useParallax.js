import { useEffect }
  from 'react'

import gsap from 'gsap'

export default function
useParallax(selector) {

  useEffect(() => {

    const elements =
      document.querySelectorAll(
        selector
      )

    elements.forEach((el) => {

      gsap.to(el, {

        y: -40,

        ease: 'none',

        scrollTrigger: {

          trigger: el,

          scrub: true,

        },

      })

    })

  }, [selector])

}