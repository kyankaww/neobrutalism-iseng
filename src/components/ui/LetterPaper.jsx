export default function LetterPaper({
  children,
}) {

  return (
    <div
      className="
      relative

      bg-[#F5F5F5]
      text-[#111]

      border-[4px]
      border-[#111]

      shadow-[10px_10px_0px_#111]

      p-8
      md:p-14

      w-full

max-w-3xl
lg:max-w-[90%]
2xl:max-w-[1600px]

mx-auto

      rotate-[-1deg]

      transition-all
      duration-300

      md:hover:-translate-y-2
      "
    >

      {/* paper fold */}

      <div
        className="
        absolute
        top-0
        right-0

        w-10
        h-10

        bg-[#e8e8e8]

        border-l-[4px]
        border-b-[4px]
        border-[#111]
        "
      />

      <div
        className="
        whitespace-pre-line

        text-lg
        md:text-2xl

        leading-[2]
        "
      >
        {children}
      </div>

    </div>
  )
}