import { useEffect, useRef } from 'react'

import Section from '../../components/layout/Section'
import BrutalButton from '../../components/ui/BrutalButton'
import useParallax from '../../hooks/useParallax'



import {
    Display,
    Body,
    Mono,
} from '../../components/ui/Typography'

import BrutalCard from '../../components/ui/BrutalCard'

import { revealUp } from '../../animations/revealUp'

export default function Hero() {

    const heroRef = useRef()

    useParallax('.hero-parallax')

    useEffect(() => {
        revealUp(heroRef.current.children)
    }, [])

    return (
        <Section
            className="
      flex
      flex-col
      justify-center
      gap-8
      "
        >

            <div
                ref={heroRef}
                className="hero-parallax flex flex-col gap-8"
            >

                <Mono>
                    MUSEUM OF US
                </Mono>

                <Display>
                    it was supposed
                    <br />
                    to be just coffee.
                </Display>

                <Body className="max-w-[36rem] text-pretty">
                    but somehow,
                    the conversations stayed longer
                    than either of us expected.
                </Body>

                <BrutalCard
                    className="
    max-w-md
    bg-[#FFD500]
    "
                >

                    <Mono>
                        scroll carefully.
                    </Mono>

                    <p className="mt-4 text-lg">
                        some things here
                        never really happened.
                    </p>

                </BrutalCard>

                <BrutalButton>
                    Enter Archive
                </BrutalButton>

            </div>

        </Section>
    )
}