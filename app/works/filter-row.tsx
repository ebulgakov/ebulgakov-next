import { Stack, Typography } from "@mui/material";

import { FilterChip } from "./filter-chip";

type FilterRowProps = {
  items: {
    label: string;
    value: string;
  }[];
  title: string;
  prop: string;
  getUrl: ({ newYear, newCategory }: { newYear?: string; newCategory?: string }) => string;
  selectedItem?: string;
};

function FilterRow({ items, title, getUrl, selectedItem, prop }: FilterRowProps) {
  return (
    <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: "wrap", alignItems: "center" }}>
      <Typography className="mr-3 w-full text-lg md:w-auto">{title}</Typography>
      {items.map(item => (
        <FilterChip
          key={item.value}
          href={getUrl({ [prop]: item.value === selectedItem ? "-" : item.value })}
          label={item.label}
          selected={item.value === selectedItem}
        />
      ))}
    </Stack>
  );
}

export { FilterRow };
