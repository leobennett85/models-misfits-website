import Image from "next/image";

const bridalGallery = [
  "/bridal/bridal-1.jpg",
  "/bridal/bridal-2.jpg",
  "/bridal/bridal-3.jpg",
  "/bridal/bridal-5.jpg",
  "/bridal/bridal-6.jpg",
  "/bridal/bridal-7.jpg",
];

export default function BridalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fdfbf8] to-[#f8f6f2]">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-32">

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

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <p className="mb-4 uppercase tracking-[0.4em] text-[#c8a45d]">
                Bridal Beauty
              </p>

              <h1
                className="
                  mb-8
                  text-5xl
                  font-bold
                  leading-tight
                  text-slate-900
                  md:text-7xl
                "
              >
                Luxury Bridal Styling
                <br />
                Designed Around You
              </h1>

              <p className="mb-10 max-w-2xl text-xl leading-relaxed text-slate-600">
                Bridal hair in St. John&apos;s, Newfoundland designed for
                weddings, bridal parties, formal events, and unforgettable
                celebrations. Every style is tailored to your vision,
                personality, and special day.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">

                <a
                  href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    bg-[#c8a45d]
                    px-8
                    py-4
                    text-center
                    text-white
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Book Bridal Consultation
                </a>

                <a
                  href="#gallery"
                  className="
                    rounded-full
                    border
                    border-[#c8a45d]
                    px-8
                    py-4
                    text-center
                    text-[#c8a45d]
                    transition-all
                    duration-300
                    hover:bg-[#c8a45d]
                    hover:text-white
                  "
                >
                  View Gallery
                </a>

              </div>

            </div>

            <div className="relative">

              <div
                className="
                  absolute
                  inset-0
                  rounded-[3rem]
                  bg-[#c8a45d]/10
                  blur-3xl
                "
              />

              <Image
                src="/bridal/bridal-2.jpg"
                alt="Luxury bridal hairstyling"
                width={1200}
                height={1600}
                priority
                className="relative rounded-[3rem] shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-6 pb-32">

        <div className="mx-auto max-w-6xl">

          <div
            className="
              grid
              gap-8
              rounded-[2rem]
              border
              border-[#c8a45d]/15
              bg-white/70
              p-12
              backdrop-blur-sm
              md:grid-cols-3
            "
          >

            <div className="text-center">
              <h3 className="mb-3 text-5xl font-bold text-[#c8a45d]">
                10+
              </h3>
              <p className="text-slate-600">
                Years Creating Beautiful Bridal Looks
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-3 text-5xl font-bold text-[#c8a45d]">
                100%
              </h3>
              <p className="text-slate-600">
                Personalized Consultations
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-3 text-5xl font-bold text-[#c8a45d]">
                Luxury
              </h3>
              <p className="text-slate-600">
                Wedding Day Experience
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="px-6 pb-32">

        <div className="mx-auto max-w-6xl">

          <div className="mb-20 text-center">

            <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
              The Experience
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Your Bridal Journey
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                01 Consultation
              </h3>
              <p className="text-slate-600">
                We discuss your vision, dress, venue, wedding theme,
                accessories, and desired look.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                02 Trial Styling
              </h3>
              <p className="text-slate-600">
                Together we refine every detail so your wedding-day style
                feels perfect.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                03 Wedding Day
              </h3>
              <p className="text-slate-600">
                Relax and enjoy a luxury styling experience while we bring
                your vision to life.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="px-6 pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
              Bridal Services
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Customized Wedding Styling
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">
                Bridal Consultation
              </h3>
              <p className="text-slate-600">
                Personalized planning tailored to your wedding vision.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">
                Bridal Trial
              </h3>
              <p className="text-slate-600">
                Perfect your look before the wedding day arrives.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">
                Wedding Day Styling
              </h3>
              <p className="text-slate-600">
                Elegant, long-lasting bridal hair designed for photographs
                and celebrations.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">
                Formal Event Styling
              </h3>
              <p className="text-slate-600">
                Bridesmaids, prom, galas, and special occasions.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FEATURE QUOTE */}
      <section className="px-6 pb-32">

        <div className="mx-auto max-w-5xl">

          <div
            className="
              rounded-[3rem]
              border
              border-[#c8a45d]/15
              bg-white
              p-16
              text-center
              shadow-sm
            "
          >

            <p className="mb-8 text-3xl font-light leading-relaxed text-slate-700">
              “Your wedding style should feel effortless, beautiful,
              and completely your own.”
            </p>

            <p className="uppercase tracking-[0.3em] text-[#c8a45d]">
              Models + Misfits Salon + Spa
            </p>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-20 text-center">

            <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
              Portfolio
            </p>

            <h2 className="mb-6 text-5xl font-bold text-slate-900">
              Real Bridal Transformations
            </h2>

            <p className="mx-auto max-w-3xl text-lg text-slate-600">
              Explore wedding hair, bridal trials, formal styling,
              romantic updos, and special occasion looks created at
              Models + Misfits Salon + Spa.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {bridalGallery.map((image) => (
              <div
                key={image}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  bg-white
                  shadow-lg
                "
              >
                <Image
                  src={image}
                  alt="Bridal Hair Styling"
                  width={1200}
                  height={1600}
                  className="
                    h-full
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

      {/* CTA */}
      <section className="bg-[#111827] px-6 py-32 text-center text-white">

        <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
          Your Wedding Starts Here
        </p>

        <h2 className="mb-8 text-5xl font-bold">
          Let&apos;s Create Something Beautiful
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-lg text-slate-300">
          Whether your style is timeless, romantic, bohemian,
          alternative, or vividly unique, we&apos;ll create a bridal look
          that feels authentically you.
        </p>

        <a
          href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-full
            bg-[#c8a45d]
            px-10
            py-5
            text-lg
            text-white
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Book Bridal Consultation
        </a>

      </section>

    </main>
  );
}