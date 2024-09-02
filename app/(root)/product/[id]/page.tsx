import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { Container, ProductForm } from "@/shared/components/shared";

interface ProductPageProps {
    params: {
        id: string;
    }
}

export default async function ProductPage({params: {id}}: ProductPageProps) {
    const product = await prisma.product.findFirst({
        where: {id: Number(id)}, include: {
            ingredients: true,
            category: {
                include: {
                    products: {
                        include: {
                            items: true,
                        },
                    },
                },
            },
            items: true,
        }
    });

    if (!product) {
        return notFound();
    }

    return (
        <Container className={"flex flex-col my-10"}>
            <ProductForm product={product} />
        </Container>
    )
};
