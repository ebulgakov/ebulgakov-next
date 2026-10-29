"use client";

import { Chip } from "@mui/material";
import Link from "next/link";

type FilterChipProps = {
  href: string;
  label: string;
  selected: boolean;
};

// Client-only: Chip's `component` prop can't receive next/link from a Server Component
function FilterChip({ href, label, selected }: FilterChipProps) {
  return (
    <Chip
      component={Link}
      href={href}
      label={label}
      clickable
      color={selected ? "primary" : "default"}
      variant={selected ? "filled" : "outlined"}
    />
  );
}

export { FilterChip };
