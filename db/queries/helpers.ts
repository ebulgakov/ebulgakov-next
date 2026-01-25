import { and, eq } from "drizzle-orm";

import { works } from "@/db/schema";

export type Filter = {
  year?: string;
  category?: number;
  isPublished?: boolean;
};

export const createWorkFilter = (filter: Filter) => {
  const conditions = [];

  if (filter.isPublished !== undefined) {
    conditions.push(eq(works.isPublished, filter.isPublished));
  }
  if (filter.year) {
    conditions.push(eq(works.year, filter.year));
  }
  if (filter.category) {
    conditions.push(eq(works.category, filter.category));
  }

  return and(...conditions);
};
