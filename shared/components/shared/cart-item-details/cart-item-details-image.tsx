import { FC } from "react";

import { cn } from "@/shared/lib/utils";

interface CartItemDetailsImageProps {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: FC<CartItemDetailsImageProps> = ({ src, className }) => {
  return <img className={cn("w-[60px] h-[60px]", className)} src={src} alt="image"/>;
};
