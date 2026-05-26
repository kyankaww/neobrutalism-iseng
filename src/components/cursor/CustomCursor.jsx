import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {

  const cursorRef = useRef(null)

  const [isHovering, setIsHovering] =
    useState(false)

  const [isMobile, setIsMobile] =
    useState(window.innerWidth < 768)

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener(
      'resize',
      handleResize
    )

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      )
    }

  }, [])

  useEffect(() => {

    if (isMobile) return

    const cursor = cursorRef.current

    let mouseX = 0
    let mouseY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {

      if (cursor) {

        cursor.style.transform =
          `
          translate(
            ${mouseX}px,
            ${mouseY}px
          )
          translate(-50%, -50%)
          `
      }

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)

    window.addEventListener(
      'mousemove',
      moveCursor
    )

    const addHover = () => setIsHovering(true)
    const removeHover = () => setIsHovering(false)

    const hoverTargets =
      document.querySelectorAll(
        'a, button, .cursor-hover'
      )

    hoverTargets.forEach((el) => {
      el.addEventListener(
        'mouseenter',
        addHover
      )

      el.addEventListener(
        'mouseleave',
        removeHover
      )
    })

    return () => {

      window.removeEventListener(
        'mousemove',
        moveCursor
      )

      hoverTargets.forEach((el) => {

        el.removeEventListener(
          'mouseenter',
          addHover
        )

        el.removeEventListener(
          'mouseleave',
          removeHover
        )

      })

    }

  }, [isMobile])

  if (isMobile) return null

  return (
    <div
      ref={cursorRef}
      className={`
        fixed
        top-0
        left-0
        z-[9999]

        pointer-events-none

        rounded-full
        bg-[#FF5E5B]

        mix-blend-difference

        transition-[width,height]
        duration-200

        ${
          isHovering
            ? 'w-14 h-14'
            : 'w-6 h-6'
        }
      `}
    />
  )
}