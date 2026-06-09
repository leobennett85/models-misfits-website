export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="
        bg-[#111827]
        py-32
        text-white
      "
    >
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
          Ready For Your Next Transformation?
        </p>

        <h2 className="mb-8 text-5xl font-bold">
          Let&apos;s Create Something Beautiful Together
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-300">
          Whether you&apos;re dreaming of a dramatic color transformation,
          luxury bridal styling, or a fresh new look, we&apos;d love to
          help bring your vision to life.
        </p>

       <a
  href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    rounded-full
    bg-[#c8a45d]
    px-10
    py-5
    text-lg
    font-medium
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-2xl
  "
>
  Book Consultation
</a>

        <div
  className="
    mt-16
    flex
    flex-col
    items-center
    justify-center
    gap-6
    text-slate-300
    md:flex-row
    md:gap-12
  "
>
  <a
    href="https://www.instagram.com/models.misfits/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-[#c8a45d]"
  >
    Instagram
  </a>

  <a
    href="https://www.facebook.com/modelsandmisfits"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-[#c8a45d]"
  >
    Facebook
  </a>

  <a
    href="tel:+17096938456"
    className="transition hover:text-[#c8a45d]"
  >
    (709) 693-8456
  </a>
</div>

      </div>
    </section>
  );
}