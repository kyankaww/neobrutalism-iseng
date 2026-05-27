import { useEffect, useRef } from 'react'

import Section from '../../components/layout/Section'

import {
    Body,
    Display,
    Mono,
} from '../../components/ui/Typography'

import BrutalCard from '../../components/ui/BrutalCard'

import { revealUp } from '../../animations/revealUp'

export default function MainHall() {

    const sectionRef = useRef()

    useEffect(() => {

        revealUp(
            sectionRef.current.children
        )

    }, [])

    return (
        <Section
            className="
      bg-[#111111]
      text-[#F5F5F5]

      flex
      flex-col
      justify-center
      gap-10
      "
        >

            <div
                ref={sectionRef}
                className="
        flex
        flex-col
        gap-10
        "
            >

                <Mono className="text-[#FFD500]">
    MAIN HALL
</Mono>

<Display className="max-w-5xl">
    nothing really
    happened between us.

    somehow,
    it still mattered
</Display>

<Body
    className="
    max-w-2xl
    text-[#d1d1d1]
    text-pretty
    "
>
    we met again
    after six years.

    after a while,
    the conversations stopped
    feeling casual
</Body>

                <div
                    className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          mt-6
          "
                >

                    <BrutalCard className="bg-[#FFD500] text-[#111]">

                        <Mono>
    RECOVERED FRAGMENT
</Mono>

<p className="mt-4 text-lg">
    “don't expect too much”
</p>

                    </BrutalCard>

                    <BrutalCard className="bg-[#5DA9E9] text-[#111]">

                        <Mono>
    ARCHIVE STATUS
</Mono>

<p className="mt-4 text-lg">
    unfinished,
    but still here
</p>

                    </BrutalCard>

                </div>

            </div>

        </Section>
    )
}