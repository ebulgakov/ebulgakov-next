CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "works_to_images" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "works_to_images" CASCADE;--> statement-breakpoint
ALTER TABLE "works" DROP CONSTRAINT "works_preview_image_image_uploads_id_fk";
--> statement-breakpoint
ALTER TABLE "works" ADD COLUMN "images" jsonb DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "works" DROP COLUMN "preview_image";--> statement-breakpoint
ALTER TABLE "works" DROP COLUMN "category";