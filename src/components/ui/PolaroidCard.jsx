import clsx from 'clsx'

export default function PolaroidCard({
    image,
    note,
    rotate,
}) {
    return (
        <div
            className={clsx(
                `
                polaroid-card
    bg-[#F5F5F5]

    border-[3px]
    md:border-4
    border-[#111]

    shadow-[5px_5px_0px_#111]
    md:shadow-[8px_8px_0px_#111]

    transition-all
    duration-300

    md:hover:-translate-y-2

    p-3
    md:p-4

    w-full

    max-w-[220px]
    md:max-w-[240px]
    `,
                `
md:${rotate}
`
            )}
        >

            <div
                className="
        aspect-[4/5]
        overflow-hidden
        border-[2px]
        border-[#111]
        "
            >

                <img
                    src={image}
                    alt={note}
                    className="
          w-full
          h-full
          object-cover

          transition-transform
          duration-500

          md:hover:scale-105
          "
                />

            </div>

            <p
                className="
        mt-4

        text-sm
        md:text-base

        leading-relaxed
        "
            >
                {note}
            </p>

        </div>
    )
}