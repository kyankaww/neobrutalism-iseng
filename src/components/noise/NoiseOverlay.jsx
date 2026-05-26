export default function
NoiseOverlay() {

  return (
    <div
      className="
      fixed
      inset-0

      z-[9998]

      pointer-events-none

      opacity-[0.045]
      "
    >

      <div
        className="
        absolute
        inset-[-200%]

        animate-grain

        bg-[url('/noise.png')]
        bg-repeat
        "
      />

    </div>
  )
}