"use client";

import { memo, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/shared/store/category";
import { cn } from "@/shared/lib/utils";
import { Title } from "@/shared/components/shared/title";
import { ProductCard } from "@/shared/components/shared/product-card";
import { ProductWithRelations } from "@/@types/prisma";

interface ProductsGroupListProps {
    title: string;
    items: ProductWithRelations[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList = memo((props: ProductsGroupListProps) => {
    const {
        title,
        items,
        categoryId,
        className,
        listClassName,
    } = props;

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

    const intersectionRef = useRef<HTMLDivElement>(null);

    const intersection = useIntersection(intersectionRef, {
        threshold: 0.2
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title]);

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size={"lg"} className={"font-extrabold mb-5"}/>

            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {items
                    .map((product, i) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            id={product.id}
                            price={product.items[0].price}
                            ingredients={product.ingredients}
                        />
                    ))}
            </div>
        </div>
    )
});

ProductsGroupList.displayName = "ProductsGroupList";