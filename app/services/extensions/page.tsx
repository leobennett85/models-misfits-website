export default function ExtensionsPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2]">

      {/* Hero */}
      <section className="px-6 py-24 text-center">

        <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
          Extensions
        </p>

        <h1 className="mb-6 text-6xl font-bold text-slate-900">
          Luxury Hair Extensions in St. John&apos;s
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Add length, volume, fullness, and confidence with customized
          extension services tailored specifically to your hair goals.
        </p>

      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 pb-24">

        <div className="rounded-3xl bg-white p-10 shadow-sm">

          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Extension Services
          </h2>

          <ul className="space-y-4 text-lg text-slate-600">
            <li>• Volume Enhancement</li>
            <li>• Length Transformation</li>
            <li>• Color Enhancement</li>
            <li>• Special Event Styling</li>
            <li>• Extension Maintenance</li>
            <li>• Personalized Consultations</li>
          </ul>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#111827] py-24 text-center text-white">

        <h2 className="mb-6 text-4xl font-bold">
          Ready For Longer, Fuller Hair?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-slate-300">
          Book a consultation to discover the perfect extension solution.
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
          Book Extension Consultation
        </a>

      </section>

    </main>
  );
}