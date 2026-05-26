import { useEffect, useState } from 'react'

export default function LoaderScreen() {

    const [visible, setVisible] =
        useState(true)

    const [text, setText] =
        useState('INITIALIZING ARCHIVE')

    useEffect(() => {

        document.body.style.overflow =
            'hidden'

        const messages = [

            'INITIALIZING ARCHIVE',

            'RECOVERING FRAGMENTS',

            'LOADING MEMORY ROOMS',

            'RESTORING EMOTIONAL DATA',

        ]

        let index = 0

        const textInterval = setInterval(() => {

            index =
                (index + 1) %
                messages.length

            setText(messages[index])

        }, 700)

        const timer = setTimeout(() => {

            document.body.style.overflow =
                'auto'

            setVisible(false)

        }, 2800)

        return () => {

            clearTimeout(timer)

            clearInterval(textInterval)

        }

    }, [])

    return (
        <div
            className={`
      fixed
      inset-0

      z-[99999]

      bg-[#111111]
      text-[#F5F5F5]

      flex
      items-center
      justify-center

      transition-all
      duration-1000

      ${visible
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none'
                }
      `}
        >

            <div
                className="
        flex
        flex-col
        items-center
        gap-6
        "
            >

                {/* blinking square */}

                <div
                    className="
          w-5
          h-5

          bg-[#FF5E5B]

          animate-pulse
          "
                />

                <p
                    className="
          text-xs
          md:text-sm

          tracking-[0.35em]

          uppercase

          text-center
          "
                >
                    {text}
                </p>

            </div>

        </div>
    )
}