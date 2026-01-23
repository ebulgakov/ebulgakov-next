import { Container } from "@/app/components/ui/container";
import { CheckboxWithLabel } from "@/app/components/ui/control-with-label";
import {
  Field,
  FieldGroup,
  FieldLegend,
  FieldSet,
  FieldDescription,
  FieldLabel
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
import { Title } from "@/app/components/ui/title";
import { getAllTags, getTagsByWorkId } from "@/db/queries/get-tags";
import { getWorkBySlug } from "@/db/queries/get-works";

type WorkPageProps = {
  params: {
    id: string;
  };
};
async function AdminEditWorkPage({ params }: WorkPageProps) {
  const { id } = await params;

  const workResponse = await getWorkBySlug(id);
  const tagsResponse = await getAllTags();

  console.log(tagsResponse);
  if (!workResponse) {
    return <div>Work not found</div>;
  }

  const tagsByWorkId = await getTagsByWorkId(workResponse.id);
  return (
    <Container>
      <Title>{workResponse.title}</Title>

      <FieldGroup>
        <FieldSet>
          <FieldLegend>Title</FieldLegend>
          <FieldDescription>Description</FieldDescription>
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
                placeholder="1234 5678 9012 3456"
                required
                defaultValue={workResponse.previewDescription}
              />
              <FieldDescription>You`ll see it on the works/ page</FieldDescription>
            </Field>

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
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </Container>
  );
}

export default AdminEditWorkPage;
