import Image from "next/image";

const galleryImages = [
  "/gallery/rainbow.jpg",
  "/gallery/blue-green.jpg",
  "/gallery/purple-red.jpg",
  "/gallery/silver-pink.jpg",
  "/gallery/black-blue.jpg",
  "/gallery/blue-blue.jpg",
  "/gallery/green-blue.jpg",
  "/gallery/purple-pink.jpg",
  "/gallery/white-pink.jpg",
];

export default function HairColorPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2]">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-32 text-center">

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#c8a45d]/10
            blur-3xl
          "
        />

        <div className="relative z-10">

          <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
            Signature Vivid Color Specialist
          </p>

          <h1 className="mb-6 text-6xl font-bold text-slate-900">
            Color Without Limits
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            From dimensional blonding and balayage to vivid transformations,
            corrective color, and creative fashion shades, every service is
            customized to bring your vision to life.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-5xl px-6 pb-24">

        <div className="rounded-[2rem] bg-white p-10 shadow-xl">

          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Color Services
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl bg-[#f8f6f2] p-6">
              Balayage
            </div>

            <div className="rounded-2xl bg-[#f8f6f2] p-6">
              Blonding Services
            </div>

            <div className="rounded-2xl bg-[#f8f6f2] p-6">
              Root Touch-Ups
            </div>

            <div className="rounded-2xl bg-[#f8f6f2] p-6">
              Full Color
            </div>

            <div className="rounded-2xl bg-[#f8f6f2] p-6">
              Vivid Fashion Colors
            </div>

            <div className="rounded-2xl bg-[#f8f6f2] p-6">
              Color Correction
            </div>

            <div className="rounded-2xl bg-[#f8f6f2] p-6">
              Gloss & Toner Services
            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="pb-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-10 md:grid-cols-4">

            <div className="text-center">
              <h3 className="mb-2 text-5xl font-bold text-[#c8a45d]">
                10+
              </h3>
              <p className="text-slate-600">
                Years Experience
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-5xl font-bold text-[#c8a45d]">
                100%
              </h3>
              <p className="text-slate-600">
                Customized Formulas
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-5xl font-bold text-[#c8a45d]">
                Luxury
              </h3>
              <p className="text-slate-600">
                Salon Experience
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-2 text-5xl font-bold text-[#c8a45d]">
                Vivid
              </h3>
              <p className="text-slate-600">
                Color Specialists
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="pb-32">

        <div className="mx-auto max-w-[1800px] px-6 lg:px-16">

          <div className="mb-20 text-center">

            <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
              Portfolio
            </p>

            <h2 className="mb-6 text-5xl font-bold text-slate-900">
              Real Transformations
            </h2>

            <p className="mx-auto max-w-2xl text-slate-600">
              Every color tells a story. Explore some of our favorite
              vivid creations, dimensional blondes, and custom color work.
            </p>

          </div>

          <div className="columns-1 gap-8 md:columns-2 lg:columns-3">

            {galleryImages.map((image, index) => (
              <div
                key={image}
                className="
                  group
                  relative
                  mb-8
                  break-inside-avoid
                  overflow-hidden
                  rounded-[2rem]
                  bg-white
                  shadow-xl
                  transition-all
                  duration-700
                  hover:-translate-y-2
                "
              >

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#c8a45d]/10
                    to-transparent
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                />

                <Image
                  src={image}
                  alt={`Hair Color Transformation ${index + 1}`}
                  width={1200}
                  height={1600}
                  className="
                    h-auto
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-5xl px-6 pb-24">

        <div className="rounded-[2rem] bg-white p-10 shadow-xl">

          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Why Choose Models + Misfits?
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            We specialize in creating personalized color experiences
            designed around your goals, lifestyle, and maintenance
            preferences.
          </p>

          <p className="text-lg leading-relaxed text-slate-600">
            Whether you&apos;re looking for soft dimension, bright blonding,
            bold fashion colors, or a complete transformation, our focus
            is always healthy hair, beautiful color, and exceptional
            results.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#111827] py-24 text-center text-white">

        <h2 className="mb-6 text-5xl font-bold">
          Ready For A Color Transformation?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-slate-300">
          Book a consultation and let&apos;s create something unforgettable.
        </p>

        <a
          href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            rounded-full
            bg-[#c8a45d]
            px-8
            py-4
            font-medium
            text-white
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Book Color Consultation
        </a>

      </section>

    </main>
  );
}