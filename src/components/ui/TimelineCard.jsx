import BrutalCard from './BrutalCard'

import {
  Mono,
  Body,
} from './Typography'

export default function TimelineCard({
  year,
  title,
  text,
  image,
}) {

  return (

    <BrutalCard
      className="
      timeline-card

      bg-[#F5F5F5]
      text-[#111]

      max-w-md
      overflow-hidden

      odd:rotate-[-1deg]
      even:rotate-[1deg]
      "
    >

      <img
        src={image}
        alt={title}
        className="
        w-full
        h-52
        object-cover

        border-b-[4px]
        border-[#111]
        "
      />

      <div className="p-6">

        <Mono>
          {year}
        </Mono>

        <h3
          className="
          mt-4

          text-xl
          md:text-2xl

          font-bold
          leading-tight
          "
        >
          {title}
        </h3>

        <Body className="mt-4 text-[#444]">
          {text}
        </Body>

      </div>

    </BrutalCard>
  )
}