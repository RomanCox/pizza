import { FC, PropsWithChildren } from "react";

import { cn } from "@/shared/lib/utils";

interface ContainerProps {
  className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ className, children }) => {
  return <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>;
};
