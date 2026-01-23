import { Container } from "@/app/components/ui/container";
import { CheckboxWithLabel } from "@/app/components/ui/control-with-label";
import {
  Field,
  FieldGroup,
  FieldLegend,
  FieldSet,
  FieldDescription,
  FieldLabel,
  FieldSeparator
} from "@/app/components/ui/field";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from "@/app/components/ui/select";
import { Textarea } from "@/app/components/ui/textarea";
import { Title } from "@/app/components/ui/title";
import { UploadImagePreview } from "@/app/components/upload-image-preview";
import { getImagesByWorkId, getPreviewImageByWorkId } from "@/db/queries/get-images";
import { getAllTags, getTagsByWorkId } from "@/db/queries/get-tags";
import { getWorkBySlug } from "@/db/queries/get-works";
import { Button } from "@/app/components/ui/button";

type WorkPageProps = {
  params: {
    id: string;
  };
};
async function AdminEditWorkPage({ params }: WorkPageProps) {
  const { id } = await params;

  const workResponse = await getWorkBySlug(id);
  const tagsResponse = await getAllTags();
  if (!workResponse) return <div>Work not found</div>;

  const tagsByWorkId = await getTagsByWorkId(workResponse.id);
  const imagesByWorkId = await getImagesByWorkId(workResponse.id);
  const previewImageByWorkId = await getPreviewImageByWorkId(workResponse.id);

  return (
    <Container>
      <Title>{workResponse.title}</Title>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Work data</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="input-title">Title</FieldLabel>
              <Input
                id="input-title"
                placeholder="Title"
                defaultValue={workResponse.title}
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="input-preview-description">Preview Description</FieldLabel>
              <Input
                id="input-preview-description"
                placeholder="Preview Description"
                required
                defaultValue={workResponse.previewDescription}
              />
              <FieldDescription>You`ll see it on the works/ page</FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="input-description">Description</FieldLabel>
              <Textarea
                id="input-description"
                placeholder="Long text description"
                required
                defaultValue={workResponse.previewDescription}
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
                <Select defaultValue={workResponse.year}>
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
                <Select defaultValue={workResponse.category}>
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
                  <CheckboxWithLabel label="Published" checked={workResponse.isPublished} />
                </div>
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="input-category">Tags</FieldLabel>
              <div className="flex gap-3">
                {tagsResponse.map(tag => (
                  <CheckboxWithLabel
                    key={tag.id}
                    label={tag.name}
                    checked={tagsByWorkId.some(({ tag: t }) => t.id === tag.id)}
                  />
                ))}
              </div>
            </Field>

            <div className="grid grid-cols-3 gap-4">
              <Field>
                <FieldLabel htmlFor="input-slug">Slug</FieldLabel>
                <Input
                  id="input-slug"
                  placeholder="Slug"
                  required
                  defaultValue={workResponse.slug}
                />
                <FieldDescription>Link works/[slug] page</FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="input-prod-link">Production Link</FieldLabel>
                <Input
                  id="input-prod-link"
                  placeholder="Production Link"
                  required
                  defaultValue={`${workResponse.productionUrl}`}
                />
                <FieldDescription>Link to the production site</FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="input-static-link">Static Link</FieldLabel>
                <Input
                  id="input-static-link"
                  placeholder="Static Link"
                  required
                  defaultValue={`${workResponse.staticUrl}`}
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
                <UploadImagePreview image={previewImageByWorkId?.image} />
              </div>
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="input-static-link">Gallery Images</FieldLabel>
              <div className="flex gap-4">
                {imagesByWorkId.map(({ image }) => (
                  <UploadImagePreview key={image.id} image={image} />
                ))}
                <UploadImagePreview />
              </div>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </Container>
  );
}

export default AdminEditWorkPage;
