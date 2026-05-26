import Section from '../../components/layout/Section'

import {
  Display,
  Body,
  Mono,
} from '../../components/ui/Typography'

import MessageCard from '../../components/ui/MessageCard'

import hiddenMessages from '../../data/HiddenMessages.js'

import { useEffect } from 'react'

import { staggerCards }
  from '../../animations/staggerCards'

const colors = [
  'bg-[#FFD500]',
  'bg-[#5DA9E9]',
  'bg-[#FF5E5B]',
  'bg-[#F5F5F5]',
]

const rotations = [
  'rotate-1',
  '-rotate-2',
  'rotate-2',
  '-rotate-1',
]

export default function HiddenMessages() {

    useEffect(() => {

  staggerCards(
    '.message-card',
    '.messages-section'
  )

}, [])

  return (
    <Section
      className="
      messages-section
      bg-[#111111]
      text-[#F5F5F5]

      flex
      flex-col
      gap-16
      "
    >

      <div
        className="
        flex
        flex-col
        gap-6
        "
      >

        <Mono className="text-[#FFD500]">
          HIDDEN MESSAGES
        </Mono>

        <Display className="max-w-5xl">
          Things
          that were
          never sent.
        </Display>

        <Body
          className="
          max-w-2xl
          text-[#d1d1d1]
          text-pretty
          "
        >
          Some thoughts stayed drafts.
          Some became permanent background noise.
        </Body>

      </div>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3

        gap-8
        "
      >

        {hiddenMessages.map((item, index) => (

          <div
            key={item.id}
            className={`
            flex justify-center

            ${index % 2 === 0
              ? 'lg:translate-y-8'
              : 'lg:-translate-y-4'
            }
            `}
          >

            <MessageCard
              text={item.text}
              rotate={rotations[index % rotations.length]}
              color={colors[index % colors.length]}
            />

          </div>

        ))}

      </div>

    </Section>
  )
}