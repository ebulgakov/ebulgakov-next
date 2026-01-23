import type { ImageUpload, WorksToImages } from "@/db/schema";

export type PreviewImage = { preview: string; source: File; caption?: string };

export type WorkImage = WorksToImages & { image: ImageUpload };
