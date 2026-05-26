import {
  useEffect,
  useRef,
  useState,
} from 'react'

import gsap from 'gsap'

export default function AmbientAudio() {

  const audioRef = useRef(null)

  const [enabled, setEnabled] =
    useState(true)

  useEffect(() => {

    const audio = audioRef.current

    if (!audio) return

    audio.volume = 0

    const startAudio = async () => {

      try {

        await audio.play()

        gsap.to(audio, {
          volume: 0.18,
          duration: 2.5,
          ease: 'power2.out',
        })

      } catch (error) {

        console.log(
          'Autoplay blocked'
        )

        setEnabled(false)

      }

    }

    startAudio()

  }, [])

  const toggleAudio = () => {

    const audio = audioRef.current

    if (!audio) return

    if (enabled) {

      gsap.to(audio, {
        volume: 0,
        duration: 1,

        onComplete: () => {
          audio.pause()
        },
      })

      setEnabled(false)

    } else {

      audio.play()

      gsap.to(audio, {
        volume: 0.18,
        duration: 1.5,
      })

      setEnabled(true)

    }

  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/audio/ambient.mp3"
      />

      <button
        onClick={toggleAudio}
        className="
        fixed

        bottom-5
        right-5

        z-[9999]

        border-[3px]
        border-[#111]

        bg-[#FFD500]
        text-[#111]

        px-4
        py-2

        shadow-[4px_4px_0px_#111]

        text-xs
        md:text-sm

        uppercase
        tracking-[0.2em]

        transition-all
        duration-300

        hover:-translate-y-1
        "
      >

        SOUND :
        {enabled ? ' ON' : ' OFF'}

      </button>
    </>
  )
}