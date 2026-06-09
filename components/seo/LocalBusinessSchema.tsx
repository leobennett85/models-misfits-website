export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",

    name: "Models + Misfits Salon + Spa",

    telephone: "+1-709-693-8456",

    email: "modelsandmisfitssalonandspa@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "910 Topsail Road Suite 7",
      addressLocality: "St. John's",
      addressRegion: "NL",
      addressCountry: "CA",
    },

    sameAs: [
      "https://www.instagram.com/models.misfits/",
      "https://www.facebook.com/modelsandmisfits",
    ],

    url: "https://www.modelsandmisfits.ca",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}