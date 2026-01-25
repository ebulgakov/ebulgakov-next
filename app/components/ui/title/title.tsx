import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/lib/utils";

import type { HTMLProps } from "react";

const titleVariants = cva("block", {
  variants: {
    variant: {
      h1: "text-2xl md:text-4xl mt-10 mb-7 font-medium",
      h2: "text-xl md:text-3xl mt-2 mb-1 font-medium",
      h3: "text-lg md:text-2xl mt-8 mb-2 font-medium"
    }
  },
  defaultVariants: {
    variant: "h2"
  }
});

function Title({
  className,
  variant,
  ...props
}: HTMLProps<HTMLHeadingElement> & VariantProps<typeof titleVariants>) {
  const Comp: "h1" | "h2" | "h3" = variant || "h2";

  return <Comp className={cn(titleVariants({ variant, className }))} {...props} />;
}

export { Title };
