import { Button } from "@mui/material";

import type { ButtonProps } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

type ActionButtonProps = Omit<ButtonProps, "variant" | "color"> & {
  variant?: "contained" | "outlined";
  dark?: boolean;
};

const baseSx: SxProps<Theme> = {
  height: 54,
  px: "22px",
  borderRadius: 0,
  borderWidth: 1,
  borderStyle: "solid",
  fontFamily: "brandSans",
  fontSize: 15,
  fontWeight: 400,
  "& .MuiButton-endIcon": { ml: 3 },
  "& .MuiButton-endIcon svg": { fontSize: 18 }
};

function ActionButton({ variant = "contained", dark, sx, ...props }: ActionButtonProps) {
  const variantSx: SxProps<Theme> =
    variant === "contained"
      ? { bgcolor: "brand.blue", color: "brand.bg", borderColor: "brand.blue" }
      : {
          color: dark ? "brand.bg" : "brand.ink",
          borderColor: dark ? "brand.darkBorder" : "brand.line"
        };

  return (
    <Button
      variant={variant}
      sx={[baseSx, variantSx, ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    />
  );
}

export { ActionButton };
