import clsx from 'clsx'

export default function Section({
    children,
    className,
    id,
}) {
    return (
        <section
            id={id}
            className={clsx(
                `
        relative
        min-h-screen
        px-5
        sm:px-6
        md:px-12
        lg:px-20
        py-20
        md:py-28
        `,
                className
            )}
        >
            {children}
        </section>
    )
}