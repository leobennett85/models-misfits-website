import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.modelsandmisfits.ca",
    },
    {
      url: "https://www.modelsandmisfits.ca/services",
    },
    {
      url: "https://www.modelsandmisfits.ca/bridal",
    },
    {
      url: "https://www.modelsandmisfits.ca/gallery",
    },
  ];
}