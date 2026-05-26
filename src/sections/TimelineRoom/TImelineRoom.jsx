import Section from '../../components/layout/Section'

import {
    Display,
    Body,
    Mono,
} from '../../components/ui/Typography'

import TimelineCard from '../../components/ui/TimelineCard'

import timeline from '../../data/Timeline.js'

import { useEffect } from 'react'

import { staggerCards }
    from '../../animations/staggerCards'

export default function TimelineRoom() {

    useEffect(() => {

        staggerCards(
            '.timeline-card',
            '.timeline-section'
        )

    }, [])

    return (
        <Section
            className="
        timeline-section
      bg-[#FF5E5B]
      text-[#111]
      "
        >

            <div
                className="
        flex
        flex-col
        gap-8
        mb-20
        "
            >

                <Mono>
                    TIMELINE ROOM
                </Mono>

                <Display className="max-w-5xl">
                    Some stories
                    disappear slowly.
                </Display>

                <Body
                    className="
          max-w-2xl
          text-pretty
          "
                >
                    Not every ending arrives all at once.
                    Some leave in fragments.
                </Body>

            </div>

            <div
                className="
        relative

        flex
        flex-col
        gap-20
md:gap-32
        "
            >

                {/* Center Line Desktop */}

                <div
                    className="
  absolute

  left-4
  md:left-1/2

  top-0

  w-[4px]
  h-full

  bg-[#111]

  md:-translate-x-1/2
  "
                />

                {timeline.map((item, index) => (

                    <div
                        key={item.id}
                        className={`
relative

flex

justify-start

${index % 2 === 0
                                ? 'md:justify-start'
                                : 'md:justify-end'
                            }

pl-16
md:pl-0
`}
                    >

                        {/* Timeline Dot */}

                        <div
                            className="
absolute

left-4
md:left-1/2

top-10

w-6
h-6

rounded-full
border-4
border-[#111]

bg-[#FFD500]

-translate-x-1/2
z-10
"
                        />

                        <TimelineCard
                            year={item.year}
                            title={item.title}
                            text={item.text}
                            image={item.image}
                        />

                    </div>

                ))}

            </div>

        </Section>
    )
}