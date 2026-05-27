import Section from '../../components/layout/Section'

import {
  Display,
  Body,
  Mono,
} from '../../components/ui/Typography'

import LetterPaper from '../../components/ui/LetterPaper'

import finalLetter from '../../data/FinalLetter'

export default function FinalLetterRoom() {

  return (
    <Section
      className="
      bg-[#F5F5F5]
      text-[#111]

      flex
      flex-col
      gap-20
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
          FINAL LETTER
        </Mono>

        <Display className="max-w-5xl">
  i thought
  silence would make it easier.

  it didn’t
</Display>

       <Body className="max-w-2xl text-pretty">
  this was never finished.

  just written down
</Body>

      </div>

      <LetterPaper>
        {finalLetter}
      </LetterPaper>

    </Section>
  )
}