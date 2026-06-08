export default function AboutSection() {
  return (
    <section className="bg-[#f8f6f2] py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Divider */}
        <div className="mx-auto mb-20 h-px max-w-5xl bg-[#c8a45d]/20" />

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
              About Models + Misfits
            </p>

            <h2 className="mb-8 text-5xl font-bold text-slate-900">
              Where Creativity Meets Confidence
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              Models + Misfits Salon + Spa is a luxury beauty destination
              dedicated to helping every guest express their individuality.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              From vivid color transformations and dimensional blonding
              to bridal beauty and luxury styling, every service is
              personalized to enhance your confidence and celebrate
              your unique style.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              We believe beauty should never fit inside a box.
              That&apos;s why every appointment is built around creativity,
              craftsmanship, and connection.
            </p>

          </div>

          {/* Right Side */}
          <div className="relative">

            {/* Glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-80
                w-80
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#c8a45d]/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                rounded-[2rem]
                border
                border-[#c8a45d]/20
                bg-white/60
                p-12
                backdrop-blur-sm
              "
            >

              <div className="grid gap-8 md:grid-cols-2">

                <div>
                  <h3 className="mb-2 text-4xl font-bold text-[#c8a45d]">
                    10+
                  </h3>

                  <p className="text-slate-600">
                    Years Creating Beautiful Transformations
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-4xl font-bold text-[#c8a45d]">
                    100%
                  </h3>

                  <p className="text-slate-600">
                    Personalized Consultations
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-4xl font-bold text-[#c8a45d]">
                    Luxury
                  </h3>

                  <p className="text-slate-600">
                    Bridal & Special Event Styling
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-4xl font-bold text-[#c8a45d]">
                    Vivid
                  </h3>

                  <p className="text-slate-600">
                    Color Specialists
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}