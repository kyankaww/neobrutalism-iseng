import clsx from 'clsx'

export default function BrutalButton({
  children,
  className,
}) {
  return (
    <button
      className={clsx(
        `
        cursor-hover

        border-[3px]
        md:border-4
        border-[#111]

        bg-[#FF5E5B]
        text-[#111]

        px-5
        py-3

        md:px-6
        md:py-4

        font-medium
        uppercase
        tracking-wide

        shadow-[5px_5px_0px_#111]
        md:shadow-[8px_8px_0px_#111]

        transition-all
        duration-300

        md:hover:-translate-y-1
        md:hover:translate-x-1

        active:translate-y-1
        active:translate-x-1
        `
      )}
    >
      {children}
    </button>
  )
}