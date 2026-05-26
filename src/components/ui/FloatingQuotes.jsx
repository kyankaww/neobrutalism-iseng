import { useEffect, useState } from 'react'

import floatingQuotes from '../../data/FloatingQuotes.js'

export default function FloatingQuotes() {

  const [quote, setQuote] =
    useState(floatingQuotes[0])

  const [visible, setVisible] =
    useState(true)

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

    const interval = setInterval(() => {

      setVisible(false)

      setTimeout(() => {

        const randomQuote =
          floatingQuotes[
            Math.floor(
              Math.random() *
              floatingQuotes.length
            )
          ]

        setQuote(randomQuote)

        setVisible(true)

      }, 500)

    }, isMobile ? 9000 : 7000)

    return () => clearInterval(interval)

  }, [isMobile])

  return (
    <div
      className={`
        fixed
        z-[90]

        left-1/2
        -translate-x-1/2

        bottom-6
        md:bottom-10

        pointer-events-none

        transition-all
        duration-700

        ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        }
      `}
    >

      <div
        className="
        border-[3px]
        border-[#111]

        bg-[#F5F5F5]/90
        backdrop-blur-sm

        px-4
        py-3

        md:px-5
        md:py-4

        shadow-[5px_5px_0px_#111]
        md:shadow-[8px_8px_0px_#111]

        max-w-[90vw]
        md:max-w-none
        "
      >

        <p
          className="
          text-xs
          md:text-sm

          uppercase
          tracking-widest

          text-center
          "
        >
          {quote}
        </p>

      </div>

    </div>
  )
}