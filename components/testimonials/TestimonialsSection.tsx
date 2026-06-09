export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Absolutely obsessed with my hair. The color is vibrant, healthy, and exactly what I envisioned.",
      name: "Sarah M.",
    },
    {
      quote:
        "The most personalized salon experience I've ever had. I felt listened to from start to finish.",
      name: "Ashley T.",
    },
    {
      quote:
        "Nobody does vivid color transformations like Models + Misfits. Pure artistry.",
      name: "Jessica R.",
    },
  ];

  return (
    <section className="bg-[#faf8f4] py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 h-px max-w-5xl bg-[#c8a45d]/20" />

        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.35em] text-[#c8a45d]">
            Client Love
          </p>

          <h2 className="mb-6 text-5xl font-bold text-slate-900">
            Kind Words From Our Guests
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Creating beautiful hair is only part of what we do.
            Building confidence is what matters most.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                min-h-[320px]
                rounded-3xl
                border
                border-[#c8a45d]/15
                bg-[#faf8f4]
                p-12
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div className="mb-6 text-3xl text-[#c8a45d]">
                ★★★★★
              </div>

              <p className="mb-8 leading-relaxed text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="h-px w-12 bg-[#c8a45d]" />

              <div className="mt-8 flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#c8a45d]/10
                    font-semibold
                    text-[#c8a45d]
                  "
                >
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>

                <p className="font-semibold text-slate-900">
                  {testimonial.name}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}