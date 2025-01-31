import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./config/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url:"postgresql://neondb_owner:npg_0KNvgqDk2wsG@ep-billowing-thunder-a87r1bd7-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
  }
});
