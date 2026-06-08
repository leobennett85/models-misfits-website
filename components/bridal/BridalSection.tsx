export default function BridalSection() {
  return (
    <section
      className="
        mx-auto
        max-w-6xl
        rounded-xl
        border
        border-[#e6ddd1]
        bg-white
        p-12
        shadow-sm
      "
    >
      <div className="max-w-2xl">
        <p
          className="
            mb-2
            uppercase
            tracking-[0.3em]
            text-[#c8a45d]
          "
        >
          Bridal
        </p>

        <h2 className="mb-4 text-4xl font-bold">
          Look unforgettable.
        </h2>

        <p className="mb-8 text-gray-600">
          Luxury bridal styling, makeup,
          consultations, trial sessions,
          and wedding-day beauty services.
        </p>

        <button
          className="
            rounded-md
            bg-[#c8a45d]
            px-6
            py-3
            text-white
          "
        >
          Explore Bridal
        </button>
      </div>
    </section>
  );
}