import type { WorkFormValues } from "./schema";
import type { NewWork, WorkTagWithTag } from "@/db/schema";
import type { DefaultValues } from "react-hook-form";

export const toFormValues = (
  work: NewWork,
  workTags: WorkTagWithTag[]
): DefaultValues<WorkFormValues> => ({
  title: work.title,
  titleRu: work.titleRu ?? "",
  previewDescription: work.previewDescription,
  previewDescriptionRu: work.previewDescriptionRu ?? "",
  description: work.description ?? "",
  descriptionRu: work.descriptionRu ?? "",
  year: work.year,
  category: work.category,
  isPublished: work.isPublished ?? false,
  tags: workTags.map(({ tag }) => tag.id),
  slug: work.slug,
  productionUrl: work.productionUrl ?? "",
  staticUrl: work.staticUrl ?? "",
  previewImage: work.previewImage?.public_id ? work.previewImage : undefined,
  images: work.images ?? []
});
