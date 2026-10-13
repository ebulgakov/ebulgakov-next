import { z } from "zod";

const workImageSchema = z.object(
  {
    caption: z.string().optional(),
    preview: z.string(),
    public_id: z.string().min(1)
  },
  { error: "Please upload a preview image" }
);

export const workFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  titleRu: z.string(),
  previewDescription: z.string().min(1, "Preview description is required"),
  previewDescriptionRu: z.string(),
  description: z.string(),
  descriptionRu: z.string(),
  year: z.string().min(1, "Select a year"),
  category: z.number({ error: "Select a category" }).int().positive(),
  isPublished: z.boolean(),
  tags: z.array(z.number()),
  slug: z.string().min(1, "Slug is required"),
  productionUrl: z.string(),
  staticUrl: z.string(),
  previewImage: workImageSchema,
  images: z.array(workImageSchema)
});

export type WorkFormValues = z.infer<typeof workFormSchema>;

export type WorkActionResult = {
  message: string;
  success: boolean;
  field?: "slug";
};
