import Link from "next/link";

import { cn } from "@/app/lib/utils";

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
    <div className="flex flex-wrap">
      <div className="mr-4 self-center text-lg w-full md:w-auto">{title}</div>
      {items.map(item => (
        <Link
          href={getUrl({ [prop]: item.value === selectedItem ? "-" : item.value })}
          key={item.value}
          className={cn(
            "m-1 cursor-pointer rounded border border-gray-300 bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200",
            {
              "bg-gray-300": item.value === selectedItem
            }
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export { FilterRow };
