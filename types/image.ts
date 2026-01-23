import type { ImageUpload, WorksToImages } from "@/db/schema";

export type PreviewImage = { preview: string; source: File };

export type WorkImage = WorksToImages & { image: ImageUpload };
