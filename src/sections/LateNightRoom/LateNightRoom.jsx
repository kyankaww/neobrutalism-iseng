import Section from '../../components/layout/Section'

import {
    Display,
    Body,
    Mono,
} from '../../components/ui/Typography'

import ThoughtCard from '../../components/ui/ThoughtCard'

import lateNightThoughts from '../../data/LateNightThoughts'

export default function LateNightRoom() {

    return (
        <Section
            className="
      bg-[#0D0D0D]
      text-[#F5F5F5]

      flex
      flex-col
      gap-24
      "
        >

            <div
                className="
        flex
        flex-col
        gap-6
        "
            >

                <Mono className="text-[#5DA9E9]">
                    LATE NIGHT ROOM
                </Mono>

                <Display className="max-w-5xl">
                    some thoughts
                    become harder to ignore
                    at night.
                </Display>

                <Body
  className="
  max-w-2xl
  text-[#bdbdbd]
  text-pretty
  "
>
  things feel quieter here.

  unfortunately,
  that leaves more room to think.
</Body>

            </div>

            <div
                className="
        flex
        flex-col
        gap-20
        md:gap-32
        "
            >

                {lateNightThoughts.map((item, index) => (

                    <ThoughtCard
                        key={item.id}
                        text={item.text}
                        align={
                            index % 2 === 0
                                ? 'md:self-start'
                                : 'md:self-end'
                        }
                    />

                ))}

            </div>

        </Section>
    )
}