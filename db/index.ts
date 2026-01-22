import "dotenv/config";

import assert from "node:assert";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

assert(process.env.DATABASE_URL, "DATABASE_URL environment variable is not set");

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

export default db;

export type {
  Work,
  NewWork,
  ImageUpload,
  NewImageUpload,
  WorksToImages,
  NewWorksToImages,
  Tag,
  NewTag,
  WorkTag,
  NewWorkTag
} from "./schema";
