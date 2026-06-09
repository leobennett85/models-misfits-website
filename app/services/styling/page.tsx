export default function StylingPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2]">

      {/* Hero */}
      <section className="px-6 py-24 text-center">

        <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
          Styling
        </p>

        <h1 className="mb-6 text-6xl font-bold text-slate-900">
          Professional Hair Styling in St. John&apos;s
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Whether it&apos;s an everyday confidence boost or a special event,
          our styling services help you look and feel your best.
        </p>

      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pb-24">

        <div className="rounded-3xl bg-white p-10 shadow-sm">

          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Styling Services
          </h2>

          <ul className="space-y-4 text-lg text-slate-600">
            <li>• Blowouts</li>
            <li>• Event Styling</li>
            <li>• Formal Updos</li>
            <li>• Bridal Styling</li>
            <li>• Curl & Texture Styling</li>
            <li>• Special Occasion Hair</li>
          </ul>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#111827] py-24 text-center text-white">

        <h2 className="mb-6 text-4xl font-bold">
          Ready To Elevate Your Look?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-slate-300">
          Let&apos;s create a style that perfectly suits your occasion.
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
          Book Styling Appointment
        </a>

      </section>

    </main>
  );
}