import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {ChooseProductModal, Container, GroupVariants, PizzaImage, Title} from "@/shared/components/shared";

interface ProductPageProps {
    params: {
        id: string;
    }
}

export default async function ProductModalPage({params: {id}}: ProductPageProps) {
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id),
        },
        include: {
            ingredients: true,
            items: true,
        }
    });

    if (!product) {
        return notFound();
    }

    return (
        <ChooseProductModal product={product} />
        // <Container className={"flex flex-col my-10"}>
        //     <div className={"flex flex-1"}>
        //         <PizzaImage imageUrl={product.imageUrl} size={40}/>
        //
        //         <div className={"w-[490] bg-[#f7f6f5] p-7"}>
        //             <Title text={product.name} size={"md"} className={"font-extrabold mb-1"}/>
        //
        //             <p className={"text-gray-400"}>Lorem ipsum dolor sit amet, consectetur</p>
        //
        //             <GroupVariants
        //                 value={"3"}
        //                 items={[
        //                     {
        //                         name: "Маленькая",
        //                         value: "1",
        //                     },
        //                     {
        //                         name: "Средняя",
        //                         value: "2",
        //                     },
        //                     {
        //                         name: "Большая",
        //                         value: "3",
        //                     },
        //                 ]}
        //             />
        //         </div>
        //     </div>
        // </Container>
    )
};
