"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useController, useForm } from "react-hook-form";

import { toFormValues } from "@/app/components/admin/work/helper";
import { workFormSchema } from "@/app/components/admin/work/schema";
import { Button } from "@/app/components/ui/button";
import { CheckboxWithLabel } from "@/app/components/ui/control-with-label";
import {
  Field,
  FieldDescription,
  FieldError,
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

import { UpdateMedia } from "./update-media";

import type { WorkActionResult, WorkFormValues } from "@/app/components/admin/work/schema";
import type { NewWork, Tag, WorkTagWithTag, Category } from "@/db/schema";

type WorkFormProps = {
  work: NewWork;
  categories: Category[];
  tags: Tag[];
  workTags: WorkTagWithTag[];
  onSubmit: (payload: WorkFormValues) => Promise<WorkActionResult>;
  onRemove?: () => Promise<WorkActionResult>;
};

function WorkForm({ work, tags, workTags, categories, onSubmit, onRemove }: WorkFormProps) {
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<WorkFormValues>({
    resolver: zodResolver(workFormSchema),
    defaultValues: toFormValues(work, workTags)
  });
  const { field: previewImage } = useController({ control, name: "previewImage" });
  const { field: images } = useController({ control, name: "images" });

  const handleValid = async (values: WorkFormValues) => {
    try {
      const result = await onSubmit(values);
      if (!result.success) {
        setError(result.field ?? "root", { message: result.message }, { shouldFocus: true });
        return;
      }
      router.push("/admin/works");
    } catch (error) {
      console.error("Failed to submit work:", error);
      setError("root", { message: "Failed to submit work. Please try again." });
    }
  };

  const handleRemove = async () => {
    if (window.confirm("Do you really want to delete Work?")) {
      try {
        await onRemove?.();
        router.push("/admin/works");
      } catch (error) {
        console.error("Failed to remove work:", error);
        alert("Failed to remove work. Please try again.");
        return;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleValid)} noValidate>
      <Title>{work.title}</Title>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Work data</FieldLegend>
          <FieldGroup>
            <Field data-invalid={!!errors.title}>
              <FieldLabel htmlFor="input-title">Title En</FieldLabel>
              <Input
                id="input-title"
                placeholder="Title"
                aria-invalid={!!errors.title}
                {...register("title")}
              />
              <FieldError errors={[errors.title]} />
              <FieldLabel htmlFor="input-title-ru">Title Ru</FieldLabel>
              <Input id="input-title-ru" placeholder="TitleRu" {...register("titleRu")} />
            </Field>

            <Field data-invalid={!!errors.previewDescription}>
              <FieldLabel htmlFor="input-preview-description">Preview Description En</FieldLabel>
              <Input
                id="input-preview-description"
                placeholder="Preview Description"
                aria-invalid={!!errors.previewDescription}
                {...register("previewDescription")}
              />
              <FieldError errors={[errors.previewDescription]} />

              <FieldLabel htmlFor="input-preview-description-ru">Preview Description Ru</FieldLabel>
              <Input
                id="input-preview-description-ru"
                placeholder="Preview Description"
                {...register("previewDescriptionRu")}
              />

              <FieldDescription>You`ll see it on the works/ page</FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="input-description">Description En</FieldLabel>
              <Textarea
                id="input-description"
                placeholder="Long text description"
                {...register("description")}
              />

              <FieldLabel htmlFor="input-description-ru">Description Ru</FieldLabel>
              <Textarea
                id="input-description-ru"
                placeholder="Long text description"
                {...register("descriptionRu")}
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
              <Field data-invalid={!!errors.year}>
                <FieldLabel htmlFor="input-year">Year</FieldLabel>
                <Controller
                  control={control}
                  name="year"
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="input-year"
                        ref={field.ref}
                        onBlur={field.onBlur}
                        aria-invalid={!!errors.year}
                      >
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {[
                            2027, 2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016,
                            2015, 2014, 2013, 2012, 2011, 2000
                          ].map(item => (
                            <SelectItem key={item} value={item.toString()}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError errors={[errors.year]} />
              </Field>

              <Field data-invalid={!!errors.category}>
                <FieldLabel htmlFor="input-category">Category</FieldLabel>
                <Controller
                  control={control}
                  name="category"
                  render={({ field }) => (
                    <Select
                      value={field.value ? `${field.value}` : ""}
                      onValueChange={value => field.onChange(Number(value))}
                    >
                      <SelectTrigger
                        id="input-category"
                        ref={field.ref}
                        onBlur={field.onBlur}
                        aria-invalid={!!errors.category}
                      >
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {categories.map(item => (
                            <SelectItem key={item.id} value={`${item.id}`}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError errors={[errors.category]} />
              </Field>

              <Field>
                <FieldLabel>Is published</FieldLabel>
                <div className="mt-2">
                  <Controller
                    control={control}
                    name="isPublished"
                    render={({ field }) => (
                      <CheckboxWithLabel
                        label="Published"
                        ref={field.ref}
                        checked={field.value}
                        onBlur={field.onBlur}
                        onCheckedChange={checked => field.onChange(checked === true)}
                      />
                    )}
                  />
                </div>
              </Field>
            </div>

            <Field>
              <FieldLabel>Tags</FieldLabel>
              <Controller
                control={control}
                name="tags"
                render={({ field }) => (
                  <div className="flex gap-3">
                    {tags.map(tag => (
                      <CheckboxWithLabel
                        key={tag.id}
                        label={tag.name}
                        checked={field.value.includes(tag.id)}
                        onCheckedChange={checked =>
                          field.onChange(
                            checked === true
                              ? [...field.value, tag.id]
                              : field.value.filter(id => id !== tag.id)
                          )
                        }
                      />
                    ))}
                  </div>
                )}
              />
            </Field>

            <div className="grid grid-cols-3 gap-4">
              <Field data-invalid={!!errors.slug}>
                <FieldLabel htmlFor="input-slug">Slug</FieldLabel>
                <Input
                  id="input-slug"
                  placeholder="Slug"
                  aria-invalid={!!errors.slug}
                  {...register("slug")}
                />
                <FieldDescription>Link works/[slug] page</FieldDescription>
                <FieldError errors={[errors.slug]} />
              </Field>

              <Field>
                <FieldLabel htmlFor="input-prod-link">Production Link</FieldLabel>
                <Input
                  id="input-prod-link"
                  placeholder="Production Link"
                  {...register("productionUrl")}
                />
                <FieldDescription>Link to the production site</FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="input-static-link">Static Link</FieldLabel>
                <Input
                  id="input-static-link"
                  placeholder="Static Link"
                  {...register("staticUrl")}
                />
                <FieldDescription>Link to to the static markup</FieldDescription>
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>

        <UpdateMedia
          previewImage={previewImage.value}
          workImages={images.value}
          onSetPreviewImage={previewImage.onChange}
          onSetWorkImages={images.onChange}
        />
        <FieldError errors={[errors.previewImage]} />
        {errors.images && <FieldError>Some gallery images are invalid</FieldError>}

        <FieldSeparator />

        <FieldGroup>
          <FieldError errors={[errors.root]} />
          <div className="flex gap-4">
            <Button className="flex-1" type="submit" disabled={isSubmitting}>
              Save Work
            </Button>

            {onRemove && (
              <Button type="button" variant="destructive" onClick={handleRemove}>
                Remove Work
              </Button>
            )}
          </div>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
}

export { WorkForm };
