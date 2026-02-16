import type { PayloadWork, WorkImage } from "@/types/common";

export const formatDataToWork = (
  formData: FormData,
  previewImage: WorkImage,
  images: WorkImage[]
): PayloadWork => {
  const title = formData.get("title");
  const titleRu = formData.get("titleRu");
  const previewDescription = formData.get("previewDescription");
  const previewDescriptionRu = formData.get("previewDescriptionRu");
  const description = formData.get("description");
  const descriptionRu = formData.get("descriptionRu");
  const year = formData.get("year");
  const category = formData.get("category");
  const isPublished = formData.get("isPublished") === "on";
  const tags = formData.getAll("tag[]");
  const slug = formData.get("slug");
  const productionUrl = formData.get("productionUrl");
  const staticUrl = formData.get("staticUrl");

  return {
    title: `${title}`,
    titleRu: `${titleRu}`,
    previewDescription: `${previewDescription}`,
    previewDescriptionRu: `${previewDescriptionRu}`,
    description: `${description}`,
    descriptionRu: `${descriptionRu}`,
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
