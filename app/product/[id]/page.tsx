import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, PizzaImage} from "@/shared/components/shared";

interface ProductPageProps {
    params: {
        id: string;
    }
}

export default async function ProductPage({params: {id}}: ProductPageProps) {
    const product = await prisma.product.findFirst({where: {id: Number(id)}});

    if (!product) {
        return notFound();
    }

    return (
        <Container className={"flex flex-col my-10"}>
            <div className={"flex flex-1"}>
                <PizzaImage imageUrl={product.imageUrl} size={40}/>
            </div>
        </Container>
    )
};
