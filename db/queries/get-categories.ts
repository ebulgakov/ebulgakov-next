import { eq } from "drizzle-orm";

import db from "@/db";
import { category, works } from "@/db/schema";

import { createWorkFilter, type Filter } from "./helpers";

async function getAllCategories() {
  return db.query.category.findMany({});
}

async function getCategories(filters: Filter = {}) {
  return db
    .selectDistinct({ id: category.id, name: category.name })
    .from(category)
    .innerJoin(works, eq(works.category, category.id))
    .where(createWorkFilter(filters));
}

export { getAllCategories, getCategories };
