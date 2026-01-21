import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto">
      <div className="px-4">{children}</div>
    </div>
  );
}

export { Container };
