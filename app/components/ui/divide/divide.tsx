import { cn } from "@/app/lib/utils";

type DivideProps = {
  className?: string;
};
function Divide({ className }: DivideProps) {
  return (
    <hr
      className={cn(
        "bg-primary before:bg-primary-light my-12 h-0.5 border-none before:mx-auto before:block before:h-full before:w-75 before:border-x-30 before:border-white",
        className
      )}
    />
  );
}
export { Divide };
