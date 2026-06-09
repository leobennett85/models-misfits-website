export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto max-w-7xl px-6 py-28">

        <div className="grid gap-12 lg:grid-cols-4">

          <div>
            <h3 className="mb-6 text-3xl font-bold">
              Models + Misfits
            </h3>

            <p className="leading-relaxed text-slate-300">
              Luxury salon and spa experiences specializing in vivid color,
              bridal beauty, dimensional blonding, and personalized styling.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-[#c8a45d]">
              Services
            </h4>

            <ul className="space-y-3 text-slate-300">
              <li>Hair Color</li>
              <li>Bridal Beauty</li>
              <li>Extensions</li>
              <li>Styling</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-[#c8a45d]">
              Contact
            </h4>

            <ul className="space-y-3 text-slate-300">
              <li>St. John&apos;s, Newfoundland</li>
              <li>(709) XXX-XXXX</li>
              <li>hello@modelsandmisfits.ca</li>

              <li>
                <a
                  href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c8a45d]"
                >
                  Book Online
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-semibold text-[#c8a45d]">
              Hours
            </h4>

            <ul className="space-y-3 text-slate-300">
              <li>Mon - Fri: 9am - 6pm</li>
              <li>Saturday: 9am - 4pm</li>
              <li>Sunday: By Appointment</li>
            </ul>
          </div>

        </div>

        <div className="my-12 h-px bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} Models + Misfits Salon + Spa
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#c8a45d]">
              Instagram
            </a>

            <a href="#" className="transition hover:text-[#c8a45d]">
              Facebook
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}