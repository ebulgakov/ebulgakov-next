import type { NewWork } from "@/db/schema";

export type PreviewImage = { preview: string; source: File; caption?: string };

export type WorkImage = {
  caption?: string;
  preview: string;
  public_id: string;
};

export type PayloadWork = NewWork & { tags: number[] };
