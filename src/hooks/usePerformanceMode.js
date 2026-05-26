import { useEffect, useState }
  from 'react'

export default function
usePerformanceMode() {

  const [isMobile, setIsMobile] =
    useState(false)

  const [reduceMotion,
    setReduceMotion] =
    useState(false)

  useEffect(() => {

    const mobile =
      window.innerWidth < 768

    const prefersReduced =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

    setIsMobile(mobile)

    setReduceMotion(
      mobile || prefersReduced
    )

  }, [])

  return {
    isMobile,
    reduceMotion,
  }
}