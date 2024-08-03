import {Container, Filters, ProductsGroupList, Title, TopBar} from "@/shared/components/shared";

export default function Home() {
    return (
        <>
            <Container className={"mt-10"}>
                <Title text={"Все пиццы"} size={"lg"} className={"font-extrabold"}/>
            </Container>

            <TopBar/>

            <Container className={"mt-10 pb-14"}>
                <div className={"flex gap-[80px]"}>
                    <div className={"w-[250px]"}>
                        <Filters />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title={"Пиццы"}
                                categoryId={1}
                                items={[
                                    {
                                        id: 1,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 2,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 3,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 4,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 5,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 6,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 7,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 8,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 9,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 10,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 11,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 12,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 13,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                ]}
                            />
                            <ProductsGroupList
                                title={"Комбо"}
                                categoryId={2}
                                items={[
                                    {
                                        id: 1,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 2,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 3,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 4,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 5,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 6,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 7,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 8,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 9,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 10,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 11,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 12,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                    {
                                        id: 13,
                                        name: "Пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif",
                                        price: 100,
                                        items: [{price: 100,}]
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
