import Link from "next/link";

const services = [
  {
    title: "Hair Color",
    description:
      "Custom color, balayage, blonding, vivid transformations, and color correction.",
  },
  {
    title: "Bridal Beauty",
    description:
      "Luxury bridal styling, consultations, trials, and wedding-day beauty.",
  },
  {
    title: "Extensions",
    description:
      "Length, volume, and seamless extension services tailored to your look.",
  },
  {
    title: "Styling",
    description:
      "Professional styling for everyday confidence and special occasions.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f8f6f2]">

      {/* Hero */}
      <section className="px-6 py-32 text-center">

        <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
          Services
        </p>

        <h1 className="mb-6 text-6xl font-bold text-slate-900">
          Beauty Without Boundaries
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          From vivid transformations to bridal beauty,
          every service is customized to create a look
          that feels uniquely yours.
        </p>

      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 pb-32">

        <div className="grid gap-10 md:grid-cols-2">

          {services.map((service) => (
            <div
              key={service.title}
              className="
                rounded-3xl
                bg-white
                p-10
                shadow-sm
              "
            >
              <h2 className="mb-4 text-3xl font-semibold text-slate-900">
                {service.title}
              </h2>

              <div className="mb-6 h-px w-16 bg-[#c8a45d]" />

              <p className="mb-8 text-slate-600">
                {service.description}
              </p>

              <a
                href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  rounded-full
                  bg-[#c8a45d]
                  px-6
                  py-3
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Book This Service
              </a>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#111827] px-6 py-24 text-center text-white">

        <h2 className="mb-6 text-4xl font-bold">
          Ready For Your Transformation?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-slate-300">
          Book your consultation today and let's create something amazing.
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
          "
        >
          Book Online
        </a>

      </section>

    </main>
  );
}