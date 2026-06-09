import Image from "next/image";

export default function BridalSection() {
  return (
    <section id="bridal" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Divider */}
        <div className="mx-auto mb-24 h-px max-w-5xl bg-[#c8a45d]/20" />

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Image */}
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
              src="/services/bridal.png"
              alt="Bridal Beauty"
              width={1200}
              height={1200}
              className="
                relative
                z-10
                w-full
                rounded-[3rem]
                shadow-2xl
              "
            />

          </div>

          {/* Content */}
          <div>

            <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
              Bridal Experience
            </p>

            <h2 className="mb-8 text-5xl font-bold text-slate-900">
              Your Dream Wedding Look
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              Every bride deserves a beauty experience that feels effortless,
              luxurious, and uniquely personal.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              From consultations and trial appointments to wedding-day styling,
              Models + Misfits creates timeless bridal looks designed to
              photograph beautifully and last all day.
            </p>

            <div className="mb-12 grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#faf8f4] p-6">
                <h3 className="mb-2 font-semibold text-slate-900">
                  Bridal Trials
                </h3>

                <p className="text-sm text-slate-600">
                  Preview and perfect your wedding-day style.
                </p>
              </div>

              <div className="rounded-2xl bg-[#faf8f4] p-6">
                <h3 className="mb-2 font-semibold text-slate-900">
                  Wedding Day Styling
                </h3>

                <p className="text-sm text-slate-600">
                  Calm, professional beauty services on your big day.
                </p>
              </div>

            </div>

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
    hover:shadow-lg
  "
>
  Book Bridal Consultation
</a>

          </div>

        </div>

      </div>
    </section>
  );
}