import clsx from "clsx";

export function Display({
  children,
  className,
}) {
  return (
    <h1
      className={clsx(
        `
        font-[Anton]
        uppercase
        leading-[0.9]
        tracking-tight

        text-[clamp(3.5rem,14vw,10rem)]
        `,
        className
      )}
    >
      {children}
    </h1>
  )
}

export function Body({ children, className }) {
    return (
        <p className={clsx(
            `
        text-[15px]
        md:text-lg
        leading-relaxed
        `,
            className)}>
            {children}
        </p>
    );
}

export function Mono({ children, className }) {
    return (
        <span
            className={clsx(
                `
        font-['IBM_Plex_Mono']
        text-xs
        uppercase
        tracking-widest
        `,
                className,
            )}
        >
            {children}
        </span>
    );
}
