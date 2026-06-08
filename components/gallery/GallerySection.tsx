import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/gallery-1.png",
    alt: "Silver Lavender Transformation",
  },
  {
    src: "/gallery/gallery-2.png",
    alt: "Purple Transformation",
  },
  {
    src: "/gallery/gallery-3.png",
    alt: "Rainbow Vivid Transformation",
  },
  {
    src: "/gallery/gallery-4.png",
    alt: "Teal Transformation",
  },
  {
    src: "/gallery/gallery-5.png",
    alt: "Blue Purple Transformation",
  },
  {
    src: "/gallery/gallery-6.png",
    alt: "Pink Red Transformation",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-[#f8f6f2] pt-40 pb-32">
      <div className="mx-auto max-w-[1800px] px-8 lg:px-20">

        {/* Divider */}
        <div className="mx-auto mb-20 h-px max-w-6xl bg-[#c8a45d]/20" />

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
            Our Work
          </p>

          <h2 className="mb-6 text-5xl font-bold text-slate-900">
            Real Transformations
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Every style tells a story. Explore some of our favorite color
            transformations, vivid creations, and luxury styling.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-20 md:grid-cols-2 xl:grid-cols-3">

          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="
                group
                relative
                flex
                items-center
                justify-center
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {/* Gold Glow */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  pointer-events-none
                "
              >
                <div
                  className="
                    h-96
                    w-96
                    rounded-full
                    bg-[#c8a45d]/10
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Image Frame */}
              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-center
                  h-[550px]
                  w-full
                "
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={1200}
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1280px) 50vw,
                    33vw
                  "
                  className="
                    max-h-full
                    max-w-full
                    object-contain
                    transition-all
                    duration-700
                    group-hover:scale-[1.03]
                  "
                />
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button
            className="
              rounded-full
              border
              border-[#c8a45d]
              px-8
              py-4
              text-sm
              uppercase
              tracking-wider
              text-[#c8a45d]
              transition-all
              duration-300
              hover:bg-[#c8a45d]
              hover:text-white
            "
          >
            View Full Gallery
          </button>
        </div>

      </div>
    </section>
  );
}