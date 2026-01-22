import "dotenv/config";

import assert from "node:assert";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as relations from "./relations";
import * as schema from "./schema";

assert(process.env.DATABASE_URL, "DATABASE_URL environment variable is not set");

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, {
  schema: {
    ...schema,
    ...relations
  }
});

export default db;
