import db from "@/db";

async function getAllCategories() {
  return db.query.category.findMany({});
}

export { getAllCategories };
