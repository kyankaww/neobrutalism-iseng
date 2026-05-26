import Section from '../../components/layout/Section'

import {
    Display,
    Body,
    Mono,
} from '../../components/ui/Typography'

import PolaroidCard from '../../components/ui/PolaroidCard'

import polaroids from '../../data/Polaroids'

import { useEffect } from 'react'

import { staggerCards }
  from '../../animations/staggerCards'

export default function PolaroidArchive() {

    useEffect(() => {

  staggerCards(
    '.polaroid-card',
    '.polaroid-section'
  )

}, [])

    return (
<Section
  className="
  polaroid-section

  bg-[#F5F5F5]

  flex
  flex-col
  gap-16
  "
>

            <div className="flex flex-col gap-6">

                <Mono>
    POLAROID ARCHIVE
</Mono>

<Display className="max-w-4xl">
    some moments
    started meaning more
    later.
</Display>

<Body
    className="
    max-w-2xl
    text-pretty
    "
>
    at the time,
    all of this still felt normal.

    i think that's why
    i didn't notice
    how attached i was getting.
</Body>

            </div>

            <div
                className="
        grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4

        gap-5
        md:gap-8
        "
            >

{polaroids.map((item) => (

  <div
    key={item.id}
    className={`
    flex justify-center

    ${item.id === 1 ? 'lg:-translate-y-10 lg:-translate-x-6' : ''}

    ${item.id === 2 ? 'lg:translate-y-10 lg:translate-x-4' : ''}

    ${item.id === 3 ? 'lg:-translate-y-4 lg:translate-x-8' : ''}

    ${item.id === 4 ? 'lg:translate-y-24 lg:-translate-x-2' : ''}

    ${item.id === 5 ? 'lg:-translate-y-14 lg:translate-x-10' : ''}

    ${item.id === 6 ? 'lg:translate-y-10 lg:-translate-x-8' : ''}

    ${item.id === 7 ? 'lg:-translate-y-2 lg:translate-x-3' : ''}

    ${item.id === 8 ? 'lg:translate-y-20 lg:-translate-x-15' : ''}
    `}
  >

    <PolaroidCard
      image={item.image}
      note={item.note}
      rotate={item.rotate}
    />

  </div>

))}

            </div>

        </Section>
    )
}