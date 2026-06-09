import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[90vh]
        items-center
        justify-center
        overflow-hidden
        px-6
      "
    >
      {/* Hero 1 */}
      <Image
        src="/hero/hero-1.png"
        alt=""
        width={500}
        height={800}
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-1/2
          z-0
          hidden
          -translate-y-1/2
          opacity-60
          drop-shadow-[0_0_50px_rgba(192,132,252,0.35)]
          lg:block
          w-[340px]
          xl:w-[420px]
        "
      />

      {/* Hero 2 */}
      <Image
        src="/hero/hero-2.png"
        alt=""
        width={500}
        height={800}
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-1/2
          z-0
          hidden
          -translate-y-1/2
          opacity-45
          drop-shadow-[0_0_50px_rgba(236,72,153,0.35)]
          lg:block
          w-[340px]
          xl:w-[420px]
        "
      />

      {/* Hero 3 */}
      <Image
        src="/hero/hero-3.png"
        alt=""
        width={500}
        height={800}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[2%]
          z-0
          hidden
          -translate-x-1/2
          opacity-60
          drop-shadow-[0_0_50px_rgba(99,102,241,0.35)]
          lg:block
          w-[260px]
          xl:w-[320px]
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#c8a45d]
          opacity-15
          blur-3xl
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          max-w-4xl
          flex-col
          items-center
          text-center
        "
      >
        <p
          className="
            mb-8
            text-sm
            uppercase
            tracking-[0.4em]
            text-[#c8a45d]
            md:text-base
          "
        >
          Models + Misfits Salon + Spa
        </p>

        <div className="mb-8">
          <Image
            src="/logos/MMLogo-v2.png"
            alt="Models + Misfits Salon and Spa"
            width={800}
            height={500}
            priority
            className="
              h-auto
              w-[340px]
              md:w-[520px]
              lg:w-[760px]
            "
          />
        </div>

        <h2
          className="
            mb-6
            text-xl
            font-medium
            tracking-wide
            text-[#3f536d]
            md:text-2xl
          "
        >
          Luxury Color • Bridal Beauty • Creative Expression
        </h2>

        <p
          className="
            mb-12
            max-w-3xl
            text-lg
            leading-relaxed
            text-[#3f536d]
            md:text-xl
          "
        >
          Where bold creativity meets luxury beauty. Specializing in
          vivid transformations, dimensional color, bridal styling,
          and personalized salon experiences.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            className="
              rounded-md
              bg-[#c8a45d]
              px-8
              py-4
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
            "
          >
            Book Your Transformation
          </button>

          <button
            className="
              rounded-md
              border
              border-[#c8a45d]
              px-8
              py-4
              text-[#c8a45d]
              transition-all
              duration-300
              hover:bg-[#c8a45d]
              hover:text-white
            "
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}