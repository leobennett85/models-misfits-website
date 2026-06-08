import Image from "next/image";

const services = [
  {
    title: "Hair Color",
    description:
      "Custom color, balayage, blonding, vivid transformations, and color correction.",
    image: "/services/color.png",
  },
  {
    title: "Bridal Beauty",
    description:
      "Luxury bridal styling, consultations, trials, and wedding-day beauty.",
    image: "/services/bridal.png",
  },
  {
    title: "Extensions",
    description:
      "Length, volume, and seamless extension services tailored to your look.",
    image: "/services/extensions.png",
  },
  {
    title: "Styling",
    description:
      "Professional styling for everyday confidence and special occasions.",
    image: "/services/styling.png",
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-[#faf8f4] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
            Our Services
          </p>

          <h2 className="mb-6 text-5xl font-bold text-[#111827]">
            Beauty Without Boundaries
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            From vivid color transformations to luxury bridal styling,
            Models + Misfits creates personalized beauty experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
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
              {/* Image Area */}
              <div
                className="
                  relative
                  flex
                  h-[22rem]
                  items-center
                  justify-center
                  overflow-hidden
                  p-8
                "
              >
                <div
                  className="
                    absolute
                    h-64
                    w-64
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
                  width={400}
                  height={400}
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
                <h3 className="mb-3 text-3xl font-semibold text-[#111827]">
                  {service.title}
                </h3>

                <div className="mb-5 h-px w-12 bg-[#c8a45d]" />

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