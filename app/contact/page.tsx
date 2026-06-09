import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2]">

      {/* Hero */}
      <section className="px-6 py-24 text-center">

        <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
          Contact
        </p>

        <h1 className="mb-6 text-6xl font-bold text-slate-900">
          Visit Models + Misfits
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          We&apos;d love to help bring your vision to life.
          Visit us in St. John&apos;s or book online anytime.
        </p>

      </section>

      {/* Contact Details */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-sm">

            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-[#c8a45d]">
                  Phone
                </h3>

                <a
                  href="tel:+17096938456"
                  className="text-slate-600 hover:text-[#c8a45d]"
                >
                  (709) 693-8456
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-[#c8a45d]">
                  Email
                </h3>

                <a
                  href="mailto:modelsandmisfitssalonandspa@gmail.com"
                  className="break-all text-slate-600 hover:text-[#c8a45d]"
                >
                  modelsandmisfitssalonandspa@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-[#c8a45d]">
                  Address
                </h3>

                <p className="text-slate-600">
                  910 Topsail Road<br />
                  Suite 7<br />
                  Majestic Salon Suites<br />
                  St. John&apos;s, NL
                </p>
              </div>

            </div>

            <a
              href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-block
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
              Book Now
            </a>

          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-3xl shadow-sm">

            <iframe
              src="https://www.google.com/maps?q=910+Topsail+Road+Suite+7+St+Johns+NL&output=embed"
              width="100%"
              height="100%"
              className="min-h-[500px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Models + Misfits Location"
            />

          </div>

        </div>

      </section>

    </main>
  );
}