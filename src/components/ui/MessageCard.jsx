import clsx from 'clsx'

export default function MessageCard({
  text,
  rotate,
  color,
}) {

  return (
    <div
      className={clsx(
        `
        message-card
        border-[3px]
        md:border-4
        border-[#111]

        p-5
        md:p-6

        shadow-[5px_5px_0px_#111]
        md:shadow-[8px_8px_0px_#111]

        transition-all
        duration-300

        md:hover:-translate-y-2

        max-w-[320px]

        text-[#111]

        leading-relaxed
        `,
        rotate,
        color
      )}
    >

      <p
        className="
        text-base
        md:text-lg
        "
      >
        {text}
      </p>

    </div>
  )
}