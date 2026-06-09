import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/gallery-1.png",
    title: "Silver Lavender",
  },
  {
    src: "/gallery/gallery-2.png",
    title: "Purple Dimension",
  },
  {
    src: "/gallery/gallery-3.png",
    title: "Rainbow Vivid",
  },
  {
    src: "/gallery/gallery-4.png",
    title: "Teal Transformation",
  },
  {
    src: "/gallery/gallery-5.png",
    title: "Blue Violet",
  },
  {
    src: "/gallery/gallery-6.png",
    title: "Pink Fusion",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2]">

      <section className="py-24 text-center">
        <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
          Portfolio
        </p>

        <h1 className="mb-6 text-6xl font-bold text-slate-900">
          Gallery
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Explore vivid color transformations, dimensional blonding,
          bridal styling, and creative expression.
        </p>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="p-8">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={1200}
                    height={1200}
                    className="
                      h-auto
                      w-full
                      object-contain
                    "
                  />
                </div>

                <div className="px-8 pb-8">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {image.title}
                  </h3>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}