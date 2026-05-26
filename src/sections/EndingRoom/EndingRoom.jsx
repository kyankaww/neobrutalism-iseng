import Section from '../../components/layout/Section'

import {
  Display,
  Mono,
} from '../../components/ui/Typography'

export default function EndingRoom() {

  return (
    <Section
      className="
      bg-[#111111]
      text-[#F5F5F5]

      min-h-screen

      flex
      flex-col
      items-center
      justify-center

      text-center

      gap-12
      "
    >

      <Mono className="text-[#FFD500]">
        EXIT ARCHIVE
      </Mono>

      <Display
        className="
        max-w-5xl
        leading-tight
        "
      >
        some things
        never fully end.

        they just get quieter.
      </Display>

      <div
        className="
        w-24
        h-[4px]
        bg-[#FF5E5B]
        "
      />

      <p
        className="
        max-w-xl

        text-sm
        md:text-base

        text-[#bdbdbd]

        leading-relaxed
        "
      >
        this was never complete.

        just preserved.
      </p>

    </Section>
  )
}