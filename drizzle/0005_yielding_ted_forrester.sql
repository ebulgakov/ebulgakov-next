ALTER TABLE "image_uploads" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "image_uploads" CASCADE;--> statement-breakpoint
ALTER TABLE "works" ADD COLUMN "previewImage" jsonb DEFAULT '{}'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "works" ADD COLUMN "category" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "works" ADD CONSTRAINT "works_category_categories_id_fk" FOREIGN KEY ("category") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;
