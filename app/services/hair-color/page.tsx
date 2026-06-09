export default function HairColorPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2]">

      {/* Hero */}
      <section className="px-6 py-24 text-center">

        <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
          Hair Color
        </p>

        <h1 className="mb-6 text-6xl font-bold text-slate-900">
          Custom Hair Color in St. John&apos;s
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          From dimensional blonding and balayage to vivid transformations
          and corrective color, every service is customized to create
          a look that is uniquely yours.
        </p>

      </section>

      {/* Services */}
      <section className="mx-auto max-w-5xl px-6 pb-24">

        <div className="rounded-3xl bg-white p-10 shadow-sm">

          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Color Services
          </h2>

          <ul className="space-y-4 text-lg text-slate-600">
            <li>• Balayage</li>
            <li>• Blonding Services</li>
            <li>• Root Touch-Ups</li>
            <li>• Full Color</li>
            <li>• Vivid Fashion Colors</li>
            <li>• Color Correction</li>
            <li>• Gloss & Toner Services</li>
          </ul>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-5xl px-6 pb-24">

        <div className="rounded-3xl bg-white p-10 shadow-sm">

          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Why Choose Models + Misfits?
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-slate-600">
            We specialize in creating personalized color experiences
            designed around your goals, lifestyle, and maintenance preferences.
          </p>

          <p className="text-lg leading-relaxed text-slate-600">
            Whether you&apos;re looking for soft dimension, bright blonding,
            bold fashion colors, or a complete transformation,
            we are committed to healthy hair and exceptional results.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#111827] py-24 text-center text-white">

        <h2 className="mb-6 text-4xl font-bold">
          Ready For A Color Transformation?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-slate-300">
          Book a consultation and let&apos;s create something beautiful.
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
          Book Color Consultation
        </a>

      </section>

    </main>
  );
}