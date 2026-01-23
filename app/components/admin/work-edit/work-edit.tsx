"use client";

import { useState } from "react";

import { UploadImagePreview } from "@/app/components/admin/upload-image-preview";
import { Button } from "@/app/components/ui/button";
import { CheckboxWithLabel } from "@/app/components/ui/control-with-label";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet
} from "@/app/components/ui/field";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/app/components/ui/select";
import { Textarea } from "@/app/components/ui/textarea";
import { Title } from "@/app/components/ui/title";

import type { Work, Tag, WorkTag } from "@/db/schema";
import type { PreviewImage, WorkImage } from "@/types/image";

type WorkEditProps = {
  work: Work;
  tags: Tag[];
  workTags: (WorkTag & { tag: Tag })[];
  workImages: WorkImage[];
  previewImage?: WorkImage;
};
function WorkEdit({ work, tags, workTags, workImages, previewImage }: WorkEditProps) {
  const [pImage, setPImage] = useState<WorkImage | undefined>(previewImage);
  const [pImageN, setPImageN] = useState<PreviewImage | undefined>(undefined);
  const [wImages, setWImages] = useState<WorkImage[]>(workImages);
  const [wImagesN, setWImagesM] = useState<PreviewImage[]>([]);

  const handleSubmit = (formData: FormData) => {
    if (!formData) return;
    if (!pImageN && !pImage) {
      alert("Please upload a preview image");
      return;
    }

    const title = formData.get("title");
    const previewDescription = formData.get("previewDescription");
    const description = formData.get("description");
    const year = formData.get("year");
    const category = formData.get("category");
    const isPublished = formData.get("isPublished");
    const selectedTags = formData.getAll("tag[]");
    const workImages = formData.getAll("workImages[]");
    const slug = formData.get("slug");
    const productionUrl = formData.get("productionUrl");
    const staticUrl = formData.get("staticUrl");

    // Handle form submission logic here
    console.log(
      title,
      previewDescription,
      description,
      year,
      category,
      isPublished,
      selectedTags,
      slug,
      productionUrl,
      staticUrl,
      workImages
    );
  };

  return (
    <form action={handleSubmit}>
      <Title>{work.title}</Title>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Work data</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="input-title">Title</FieldLabel>
              <Input
                name="title"
                id="input-title"
                placeholder="Title"
                defaultValue={work.title}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="input-preview-description">Preview Description</FieldLabel>
              <Input
                name="previewDescription"
                id="input-preview-description"
                placeholder="Preview Description"
                required
                defaultValue={work.previewDescription}
              />
              <FieldDescription>You`ll see it on the works/ page</FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="input-description">Description</FieldLabel>
              <Textarea
                name="description"
                id="input-description"
                placeholder="Long text description"
                required
                defaultValue={work.previewDescription}
              />
              <FieldDescription>You`ll see it on the work/[slug] page</FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>

        <FieldSeparator />

        <FieldSet>
          <FieldLegend>Additional info</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-3 gap-4">
              <Field>
                <FieldLabel htmlFor="input-year">Year</FieldLabel>
                <Select name="year" defaultValue={work.year}>
                  <SelectTrigger id="input-year">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {[2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2000].map(item => (
                        <SelectItem key={item} value={item.toString()}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor="input-category">Category</FieldLabel>
                <Select name="category" defaultValue={work.category}>
                  <SelectTrigger id="input-category">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {["3D", "formatting", "full stack"].map(item => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor="input-category">Is published</FieldLabel>
                <div className="mt-2">
                  <CheckboxWithLabel
                    name="isPublished"
                    label="Published"
                    defaultChecked={work.isPublished}
                  />
                </div>
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="input-category">Tags</FieldLabel>
              <div className="flex gap-3">
                {tags.map(tag => (
                  <CheckboxWithLabel
                    name="tag[]"
                    key={tag.id}
                    label={tag.name}
                    value={tag.id}
                    defaultChecked={workTags.some(({ tag: t }) => t.id === tag.id)}
                  />
                ))}
              </div>
            </Field>

            <div className="grid grid-cols-3 gap-4">
              <Field>
                <FieldLabel htmlFor="input-slug">Slug</FieldLabel>
                <Input
                  name="slug"
                  id="input-slug"
                  placeholder="Slug"
                  required
                  defaultValue={work.slug}
                />
                <FieldDescription>Link works/[slug] page</FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="input-prod-link">Production Link</FieldLabel>
                <Input
                  name="productionUrl"
                  id="input-prod-link"
                  placeholder="Production Link"
                  defaultValue={`${work.productionUrl}`}
                />
                <FieldDescription>Link to the production site</FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="input-static-link">Static Link</FieldLabel>
                <Input
                  name="staticUrl"
                  id="input-static-link"
                  placeholder="Static Link"
                  defaultValue={`${work.staticUrl}`}
                />
                <FieldDescription>Link to to the static markup</FieldDescription>
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldLegend>Media</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="input-static-link">Preview Image</FieldLabel>
              <div>
                <UploadImagePreview
                  onDelete={() => {
                    setPImageN(undefined);
                    setPImage(undefined);
                  }}
                  onAdd={setPImageN}
                  image={pImage?.image}
                  previewImage={pImageN}
                />
              </div>
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="input-static-link">Gallery Images</FieldLabel>
              <div className="flex gap-4">
                {wImages.map(({ image }) => (
                  <UploadImagePreview
                    onDelete={id => {
                      setWImages(wImages.filter(({ image }) => image.id !== id));
                    }}
                    key={image.id}
                    image={image}
                  />
                ))}
                {wImagesN.map((preview, idx) => (
                  <UploadImagePreview
                    onDelete={preview => {
                      setWImagesM(wImagesN.filter(image => image.preview !== preview));
                    }}
                    key={idx}
                    previewImage={preview}
                  />
                ))}
                <UploadImagePreview
                  onAdd={data => {
                    setWImagesM(prev => Array.from(new Set([...prev, data])));
                  }}
                />
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>

        <FieldSeparator />

        <FieldGroup>
          <Button type="submit">Save Work</Button>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
}

export { WorkEdit };
