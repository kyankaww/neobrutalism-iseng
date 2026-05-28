// pages/rooms/AdjustmentRoom.jsx

import Section from '../../components/layout/Section'

import {
  Display,
  Body,
  Mono,
} from '../../components/ui/Typography'

import BrutalCard from '../../components/ui/BrutalCard'

export default function AdjustmentRoom() {

  return (

    <Section
      className="
      bg-[#EAE7E1]
      text-[#111]

      flex
      flex-col
      gap-20

      overflow-hidden
      "
    >

      <div
        className="
        flex
        flex-col
        gap-6
        "
      >

        <Mono>
          ADJUSTMENT ROOM
        </Mono>

        <Display className="max-w-5xl">
          nothing disappeared.

          i just learned
          to carry it differently.
        </Display>

        <Body
          className="
          max-w-2xl
          text-[#444]
          text-pretty
          leading-relaxed
          "
        >
          some feelings don't leave.

          they just become quieter
          so life can continue around them
        </Body>

      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2

        gap-8
        "
      >

        <BrutalCard
          className="
          bg-[#F5F5F5]

          md:rotate-[-1deg]

          min-h-[280px]

          flex
          flex-col
          justify-between
          "
        >

          <Mono>
            unresolved
          </Mono>

          <p
            className="
            text-2xl
            md:text-3xl

            font-bold
            leading-relaxed
            "
          >
            maybe i never really stopped waiting.

            i just stopped expecting
            things to happen quickly
          </p>

        </BrutalCard>

        <BrutalCard
          className="
          bg-[#FFD500]

          md:rotate-[1deg]

          min-h-[280px]

          flex
          flex-col
          justify-between
          "
        >

          <Mono>
            adjustment in progress
          </Mono>

          <p
            className="
            text-2xl
            md:text-3xl

            font-bold
            leading-relaxed
            "
          >
            the feeling never fully disappeared.

            i just learned
            how to live beside it
          </p>

        </BrutalCard>

      </div>

      <div
        className="
        flex
        justify-center

        pt-10
        "
      >

        <div
          className="
          max-w-3xl

          border-[4px]
          border-[#111]

          bg-[#F5F5F5]

          px-6
          py-8
          md:px-10
          md:py-12

          shadow-[8px_8px_0_#111]

          md:rotate-[-1deg]
          "
        >

          <p
            className="
            text-lg
            md:text-2xl

            leading-relaxed
            text-[#222]
            "
          >
            i don't think this is about giving up.

            maybe it's just understanding
            that some people arrive in your life
            at the wrong time,
            and no amount of feeling
            can immediately fix that.

            but even then,
            some connections still stay important.

            maybe not in the way i once imagined,
            but important enough
            to remain with me anyway
          </p>

        </div>

      </div>

    </Section>

  )
}