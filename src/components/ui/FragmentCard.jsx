import clsx from 'clsx'

export default function FragmentCard({
  text,
  size,
  rotate,
}) {

  return (
    <div
      className={clsx(
        `
        border-[3px]
        border-[#111]

        bg-[#F5F5F5]
        text-[#111]

        px-4
        py-3

        shadow-[5px_5px_0px_#111]

        transition-all
        duration-300

        md:hover:-translate-y-1

        uppercase
        tracking-wide

        w-fit
        `,
        size,
        rotate
      )}
    >

      {text}

    </div>
  )
}