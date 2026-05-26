import clsx from 'clsx'

export default function ThoughtCard({
  text,
  align,
}) {

  return (
    <div
      className={clsx(
        `
        border-[3px]
        border-[#F5F5F5]

        bg-[#1A1A1A]

        p-6
        md:p-8

        max-w-xl

        shadow-[6px_6px_0px_#F5F5F5]

        transition-all
        duration-300

        md:hover:-translate-y-2

        text-[#F5F5F5]

        leading-relaxed
        `,
        align
      )}
    >

      <p
        className="
        text-lg
        md:text-2xl

        leading-relaxed
        "
      >
        {text}
      </p>

    </div>
  )
}