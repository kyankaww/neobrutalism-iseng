export default function LetterPaper({
  children,
}) {

  return (
    <div
      className="
w-full
max-w-5xl

mx-auto

bg-[#fffdf7]

border-[4px]
border-[#111]

p-6
md:p-10

shadow-[8px_8px_0_#111]

transition-all
duration-300

md:rotate-[-1deg]
md:hover:rotate-0
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