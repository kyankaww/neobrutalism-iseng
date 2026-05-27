import Section from '../../components/layout/Section'

import {
  Display,
  Body,
  Mono,
} from '../../components/ui/Typography'

import SoundtrackCard
  from '../../components/ui/SoundtrackCard'

import soundtracks
  from '../../data/Soundtracks.js'

const rotations = [
  'md:rotate-[-1deg]',
  'md:rotate-[1deg]',
]

const offsets = [
  'lg:translate-y-8',
  'lg:-translate-y-4',
  'lg:translate-y-12',
  'lg:-translate-y-6',
]

export default function SoundtrackRoom() {

  return (

    <Section
      className="
      bg-[#5DA9E9]
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
          SOUNDTRACK ROOM
        </Mono>

        <Display className="max-w-5xl">
          some songs
          started sounding different
          after you.
        </Display>

        <Body
          className="
          max-w-2xl

          text-[#222]
          text-pretty
          leading-relaxed
          "
        >
          certain tracks became attached
          to conversations,
          places,
          and nights i still remember clearly.
        </Body>

      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3

        gap-8
        lg:gap-10
        "
      >

        {soundtracks.map((item, index) => (

          <SoundtrackCard
            key={item.id}

            id={item.id}
            song={item.song}
            note={item.note}

            rotate={
              rotations[
                index % rotations.length
              ]
            }

            offset={
              offsets[
                index % offsets.length
              ]
            }
          />

        ))}

      </div>

      <div
        className="
        flex
        flex-wrap

        gap-4
        justify-center

        pt-10
        "
      >

        {[
          'replayed at 2:11 AM',
          'associated accidentally',
          'played during long conversations',
          'skipped once, replayed immediately',
          'certain lyrics stayed',
          'saved quietly',
        ].map((item, index) => (

          <div
            key={index}
            className="
            border-[3px]
            border-[#F5F5F5]

            px-4
            py-2

            text-sm
            md:text-base

            bg-[#111]
            text-[#F5F5F5]

            shadow-[4px_4px_0_#F5F5F5]
            "
          >
            {item}
          </div>

        ))}

      </div>

    </Section>

  )
}