export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="
        bg-[#0f172a]
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

        <p className="mx-auto mb-12 max-w-3xl text-lg text-slate-300">
          Whether you&apos;re dreaming of a dramatic color transformation,
          luxury bridal styling, or a fresh new look,
          we&apos;d love to help bring your vision to life.
        </p>

        <a
          href="https://www.vagaro.com/modelsandmisfitssalonandspa/book-now"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            rounded-full
            bg-[#c8a45d]
            px-8
            py-4
            font-medium
            text-white
            transition-all
            duration-300
            hover:scale-105
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
            text-sm
            uppercase
            tracking-wider
            text-slate-400
            md:flex-row
          "
        >
          <a
            href="https://www.instagram.com/models.misfits/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c8a45d]"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/modelsandmisfits"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c8a45d]"
          >
            Facebook
          </a>

          <a
            href="tel:7096938456"
            className="hover:text-[#c8a45d]"
          >
            (709) 693-8456
          </a>
        </div>

      </div>
    </section>
  );
}