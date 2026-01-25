import type { PayloadWork, WorkImage } from "@/types/common";

export const formatDataToWork = (
  formData: FormData,
  previewImage: WorkImage,
  images: WorkImage[]
): PayloadWork => {
  const title = formData.get("title");
  const previewDescription = formData.get("previewDescription");
  const description = formData.get("description");
  const year = formData.get("year");
  const category = formData.get("category");
  const isPublished = formData.get("isPublished") === "on";
  const tags = formData.getAll("tag[]");
  const slug = formData.get("slug");
  const productionUrl = formData.get("productionUrl");
  const staticUrl = formData.get("staticUrl");

  return {
    title: `${title}`,
    previewDescription: `${previewDescription}`,
    description: `${description}`,
    year: `${year}`,
    category: Number(category),
    isPublished,
    tags: tags.map(tag => Number(tag)),
    slug: `${slug}`,
    productionUrl: `${productionUrl}`,
    staticUrl: `${staticUrl}`,
    previewImage,
    images
  };
};
