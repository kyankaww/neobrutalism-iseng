import BrutalCard from './BrutalCard'

import {
  Mono,
  Body,
} from './Typography'

export default function SoundtrackCard({
  id,
  song,
  note,
  rotate,
  offset,
}) {

  return (

    <div className={offset}>

      <BrutalCard
        className={`
        soundtrack-card

        bg-[#F5F5F5]
        text-[#111]

        min-h-[260px]

        flex
        flex-col
        justify-between

        transition-all
        duration-300

        hover:-translate-y-2

        ${rotate}
        `}
      >

        <div>

          <div
            className="
            flex
            items-center
            gap-3
            "
          >

            <div
              className="
              w-4
              h-4

              rounded-full

              bg-[#111]

              border-2
              border-[#FF5E5B]
              "
            />

            <Mono>
              TRACK 0{id}
            </Mono>

          </div>

          <h3
            className="
            mt-5

            text-2xl
            md:text-3xl

            font-bold
            leading-tight
            "
          >
            {song}
          </h3>

        </div>

        <div>

          <Body
            className="
            mt-8

            text-[#333]
            text-pretty
            leading-relaxed
            "
          >
            {note}
          </Body>

          <div
            className="
            mt-6

            w-full
            h-[4px]

            bg-[#d9d9d9]
            "
          >

            <div
              className="
              h-full

              w-1/2

              bg-[#FF5E5B]
              "
            />

          </div>

        </div>

      </BrutalCard>

    </div>

  )
}