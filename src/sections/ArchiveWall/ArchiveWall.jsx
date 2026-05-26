import Section from '../../components/layout/Section'

import {
    Display,
    Body,
    Mono,
} from '../../components/ui/Typography'

import FragmentCard from '../../components/ui/FragmentCard'

import archiveFragments from '../../data/ArchiveFragments'

const sizes = [
    'text-xs',
    'text-sm',
    'text-base',
]

const rotations = [
    'rotate-1',
    '-rotate-1',
    'rotate-2',
    '-rotate-2',
]

export default function ArchiveWall() {

    return (
        <Section
            className="
      bg-[#FFD500]
      text-[#111]

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

                <Mono>
                    ARCHIVE WALL
                </Mono>

                <Display className="max-w-5xl">
                    small things
                    that stayed behind.
                </Display>

                <Body className="max-w-2xl text-pretty">
                    most of these
                    probably meant nothing.

                    they stayed anyway.
                </Body>

            </div>

            <div
                className="
        flex
        flex-wrap

        gap-5
        md:gap-7

        items-center
        justify-center
        "
            >

                {archiveFragments.map((item, index) => (

                    <FragmentCard
                        key={index}
                        text={item}
                        size={sizes[index % sizes.length]}
                        rotate={rotations[index % rotations.length]}
                    />

                ))}

            </div>

        </Section>
    )
}