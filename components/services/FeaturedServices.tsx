import Image from "next/image";

const services = [
  {
    category: "Signature Service",
    title: "Hair Color",
    description:
      "Dimensional blonding, balayage, vivid color, corrective work, and custom formulations tailored uniquely to you.",
    image: "/services/color.png",
  },
  {
    category: "Bridal Experience",
    title: "Bridal Beauty",
    description:
      "Luxury bridal styling, consultations, previews, and wedding-day beauty designed for unforgettable moments.",
    image: "/services/bridal.png",
  },
  {
    category: "Luxury Length",
    title: "Extensions",
    description:
      "Seamless volume, length, and transformation services customized to complement your lifestyle and look.",
    image: "/services/extensions.png",
  },
  {
    category: "Finishing Touch",
    title: "Styling",
    description:
      "Professional styling for special events, photoshoots, celebrations, and everyday confidence.",
    image: "/services/styling.png",
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-[#faf8f4] py-32">
      <div className="mx-auto max-w-[1800px] px-8 lg:px-20">

        {/* Header */}
        <div className="mb-24 text-center">
          <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
            Our Services
          </p>

          <h2 className="mb-6 text-5xl font-bold text-[#111827]">
            Beauty Without Boundaries
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Personalized beauty experiences designed to celebrate your
            individuality, confidence, and creativity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-[#fdfcf9]
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                hover:ring-1
                hover:ring-[#c8a45d]/30
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  flex
                  h-[24rem]
                  items-center
                  justify-center
                  overflow-hidden
                  p-8
                "
              >
                <div
                  className="
                    absolute
                    h-72
                    w-72
                    rounded-full
                    bg-[#c8a45d]/10
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:scale-125
                  "
                />

                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="
                    relative
                    z-10
                    max-h-full
                    w-auto
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c8a45d]">
                  {service.category}
                </p>

                <h3 className="mb-4 text-3xl font-semibold text-[#111827]">
                  {service.title}
                </h3>

                <div className="mb-6 h-px w-12 bg-[#c8a45d]" />

                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}