"use client";

import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

import type { WorkFormValues } from "./schema";
import type { TextFieldProps } from "@mui/material";
import type { Control, FieldPathByValue } from "react-hook-form";

type FormTextFieldProps = Omit<TextFieldProps, "name"> & {
  control: Control<WorkFormValues>;
  name: FieldPathByValue<WorkFormValues, string>;
};

// TextField bound to react-hook-form: forwards the ref to the <input> and shows the field error
function FormTextField({ control, name, helperText, ...props }: FormTextFieldProps) {
  const {
    field: { ref, ...field },
    fieldState: { error }
  } = useController({ control, name });

  return (
    <TextField
      {...props}
      {...field}
      value={field.value ?? ""}
      inputRef={ref}
      error={!!error}
      helperText={error?.message ?? helperText}
    />
  );
}

export { FormTextField };
