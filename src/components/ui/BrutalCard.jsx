import clsx from 'clsx'

export default function BrutalCard({
  children,
  className,
}) {
  return (
    <div
      className={clsx(
        `
        bg-white
        border-[3px]
        md:border-4
        border-[#111]

        shadow-[5px_5px_0px_#111]
        md:shadow-[8px_8px_0px_#111]

        transition-all
        duration-300

        md:hover:-translate-y-1
        md:hover:translate-x-1

        p-5
        md:p-6
        `,
        className
      )}
    >
      {children}
    </div>
  )
}