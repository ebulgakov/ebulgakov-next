CREATE TABLE "image_uploads" (
	"id" text PRIMARY KEY NOT NULL,
	"public_id" text NOT NULL,
	"url" text NOT NULL,
	"caption" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "works" (
	"id" serial PRIMARY KEY NOT NULL,
	"stack" text[] NOT NULL,
	"preview_image" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"category" text NOT NULL,
	"preview_description" text NOT NULL,
	"description" text NOT NULL,
	"title" text NOT NULL,
	"static_url" text NOT NULL,
	"production_url" text NOT NULL,
	"slug" text NOT NULL,
	"year" text NOT NULL,
	"is_published" boolean DEFAULT false NOT NULL,
	CONSTRAINT "works_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "works_to_images" (
	"work_id" serial NOT NULL,
	"image_id" text NOT NULL,
	CONSTRAINT "works_to_images_work_id_image_id_pk" PRIMARY KEY("work_id","image_id")
);
--> statement-breakpoint
ALTER TABLE "works" ADD CONSTRAINT "works_preview_image_image_uploads_id_fk" FOREIGN KEY ("preview_image") REFERENCES "public"."image_uploads"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "works_to_images" ADD CONSTRAINT "works_to_images_work_id_works_id_fk" FOREIGN KEY ("work_id") REFERENCES "public"."works"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "works_to_images" ADD CONSTRAINT "works_to_images_image_id_image_uploads_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."image_uploads"("id") ON DELETE no action ON UPDATE no action;