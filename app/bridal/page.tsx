import Image from "next/image";

export default function BridalPage() {
  return (
    <main className="bg-[#f8f6f2]">

      {/* Hero */}
      <section className="px-6 py-32 text-center">

        <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
          Bridal Beauty
        </p>

        <h1 className="mb-8 text-6xl font-bold text-slate-900">
          Your Wedding Day,
          Beautifully Styled
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Luxury bridal hair services designed to help you feel confident,
          beautiful, and completely yourself on one of life's most important days.
        </p>

      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 pb-32">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Image */}
          <div>
            <Image
              src="/services/bridal.png"
              alt="Bridal Styling"
              width={1200}
              height={1200}
              className="
                w-full
                rounded-[3rem]
                shadow-2xl
              "
            />
          </div>

          {/* Content */}
          <div>

            <h2 className="mb-6 text-4xl font-bold text-slate-900">
              A Luxury Bridal Experience
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              Every bridal service begins with a personalized consultation
              focused on your vision, wedding style, dress, and overall look.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              Together we'll create a timeless hairstyle that photographs
              beautifully, lasts throughout the day, and feels uniquely yours.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-slate-900">
                  Bridal Trials
                </h3>

                <p className="text-slate-600">
                  Perfect your look before the big day.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-semibold text-slate-900">
                  Wedding Day Styling
                </h3>

                <p className="text-slate-600">
                  Calm, professional styling for your wedding.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Process */}
      <section className="bg-white py-32">

        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-20 text-center">

            <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
              The Process
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Simple & Stress Free
            </h2>

          </div>

          <div className="grid gap-10 md:grid-cols-3">

            <div className="text-center">
              <div className="mb-6 text-5xl font-bold text-[#c8a45d]">
                01
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                Consultation
              </h3>

              <p className="text-slate-600">
                Discuss your vision, style, and wedding details.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 text-5xl font-bold text-[#c8a45d]">
                02
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                Trial Session
              </h3>

              <p className="text-slate-600">
                Refine and perfect your final bridal look.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 text-5xl font-bold text-[#c8a45d]">
                03
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                Wedding Day
              </h3>

              <p className="text-slate-600">
                Relax while we bring your vision to life.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#111827] px-6 py-24 text-center text-white">

        <h2 className="mb-6 text-4xl font-bold">
          Reserve Your Bridal Consultation
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-slate-300">
          Let's create a wedding-day look you'll love forever.
        </p>

        <a
          href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-full
            bg-[#c8a45d]
            px-8
            py-4
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