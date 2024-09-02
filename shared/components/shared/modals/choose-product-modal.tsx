"use client";

import { FC } from "react";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ProductForm } from "@/shared/components/shared";
import { ProductWithRelations } from "@/@types/prisma";

interface ChooseProductModalProps {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: FC<ChooseProductModalProps> = ({product, className}) => {
    const router = useRouter();

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
                    className,
                )}>
                <ProductForm product={product} onSubmit={() => router.back()} />
            </DialogContent>
        </Dialog>
    );
};
