"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useController, useForm } from "react-hook-form";

import { toFormValues } from "@/app/components/admin/work/helper";
import { workFormSchema } from "@/app/components/admin/work/schema";

import { FormTextField } from "./form-text-field";
import { UpdateMedia } from "./update-media";

import type { WorkActionResult, WorkFormValues } from "@/app/components/admin/work/schema";
import type { NewWork, Tag, WorkTagWithTag, Category } from "@/db/schema";

const years = [
  2027, 2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
  2011, 2000
];

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
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [removeError, setRemoveError] = useState("");
  const {
    control,
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
    setShowRemoveDialog(false);
    try {
      await onRemove?.();
      router.push("/admin/works");
    } catch (error) {
      console.error("Failed to remove work:", error);
      setRemoveError("Failed to remove work. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleValid)} noValidate>
      <Typography variant="h2">{work.title}</Typography>
      <Stack spacing={4} sx={{ mt: 3 }}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend" className="mb-4 text-lg font-medium">
            Work data
          </FormLabel>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <FormTextField control={control} name="title" label="Title En" />
              <FormTextField control={control} name="titleRu" label="Title Ru" />
            </Stack>

            <Stack spacing={2}>
              <FormTextField
                control={control}
                name="previewDescription"
                label="Preview Description En"
              />
              <FormTextField
                control={control}
                name="previewDescriptionRu"
                label="Preview Description Ru"
                helperText="You`ll see it on the works/ page"
              />
            </Stack>

            <Stack spacing={2}>
              <FormTextField
                control={control}
                name="description"
                label="Description En"
                placeholder="Long text description"
                multiline
                minRows={4}
              />
              <FormTextField
                control={control}
                name="descriptionRu"
                label="Description Ru"
                placeholder="Long text description"
                multiline
                minRows={4}
                helperText="You`ll see it on the work/[slug] page"
              />
            </Stack>
          </Stack>
        </FormControl>

        <Divider />

        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend" className="mb-4 text-lg font-medium">
            Additional info
          </FormLabel>
          <Stack spacing={3}>
            <Grid container spacing={2}>
              <Grid size={4}>
                <FormTextField control={control} name="year" label="Year" select>
                  {years.map(item => (
                    <MenuItem key={item} value={item.toString()}>
                      {item}
                    </MenuItem>
                  ))}
                </FormTextField>
              </Grid>

              <Grid size={4}>
                <Controller
                  control={control}
                  name="category"
                  render={({ field: { ref, value, onChange, ...field }, fieldState }) => (
                    <TextField
                      {...field}
                      select
                      label="Category"
                      inputRef={ref}
                      value={value ? `${value}` : ""}
                      onChange={e => onChange(Number(e.target.value))}
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    >
                      {categories.map(item => (
                        <MenuItem key={item.id} value={`${item.id}`}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>

              <Grid size={4}>
                <Controller
                  control={control}
                  name="isPublished"
                  render={({ field: { ref, value, onChange, ...field } }) => (
                    <FormControlLabel
                      label="Published"
                      control={
                        <Checkbox
                          {...field}
                          slotProps={{ input: { ref } }}
                          checked={value}
                          onChange={e => onChange(e.target.checked)}
                        />
                      }
                    />
                  )}
                />
              </Grid>
            </Grid>

            <FormControl component="fieldset">
              <FormLabel component="legend">Tags</FormLabel>
              <Controller
                control={control}
                name="tags"
                render={({ field }) => (
                  <FormGroup row>
                    {tags.map(tag => (
                      <FormControlLabel
                        key={tag.id}
                        label={tag.name}
                        control={
                          <Checkbox
                            checked={field.value.includes(tag.id)}
                            onChange={e =>
                              field.onChange(
                                e.target.checked
                                  ? [...field.value, tag.id]
                                  : field.value.filter(id => id !== tag.id)
                              )
                            }
                          />
                        }
                      />
                    ))}
                  </FormGroup>
                )}
              />
            </FormControl>

            <Grid container spacing={2}>
              <Grid size={4}>
                <FormTextField
                  control={control}
                  name="slug"
                  label="Slug"
                  helperText="Link works/[slug] page"
                />
              </Grid>

              <Grid size={4}>
                <FormTextField
                  control={control}
                  name="productionUrl"
                  label="Production Link"
                  helperText="Link to the production site"
                />
              </Grid>

              <Grid size={4}>
                <FormTextField
                  control={control}
                  name="staticUrl"
                  label="Static Link"
                  helperText="Link to to the static markup"
                />
              </Grid>
            </Grid>
          </Stack>
        </FormControl>

        <Divider />

        <Stack spacing={1}>
          <UpdateMedia
            previewImage={previewImage.value}
            workImages={images.value}
            onSetPreviewImage={previewImage.onChange}
            onSetWorkImages={images.onChange}
          />
          {errors.previewImage && (
            <FormHelperText error>{errors.previewImage.message}</FormHelperText>
          )}
          {errors.images && <FormHelperText error>Some gallery images are invalid</FormHelperText>}
        </Stack>

        <Divider />

        <Stack spacing={2}>
          {errors.root && <Alert severity="error">{errors.root.message}</Alert>}
          <Stack direction="row" spacing={2}>
            <Button
              className="flex-1"
              type="submit"
              variant="contained"
              size="large"
              loading={isSubmitting}
            >
              Save Work
            </Button>

            {onRemove && (
              <Button
                variant="outlined"
                color="error"
                size="large"
                onClick={() => setShowRemoveDialog(true)}
              >
                Remove Work
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>

      <Dialog open={showRemoveDialog} onClose={() => setShowRemoveDialog(false)}>
        <DialogTitle>Remove work?</DialogTitle>
        <DialogContent>
          <DialogContentText>Do you really want to delete Work?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowRemoveDialog(false)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleRemove}>
            Remove
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={!!removeError} autoHideDuration={6000} onClose={() => setRemoveError("")}>
        <Alert severity="error" variant="filled" onClose={() => setRemoveError("")}>
          {removeError}
        </Alert>
      </Snackbar>
    </form>
  );
}

export { WorkForm };
