import { ReactNode, Suspense } from "react";
import type { Metadata } from "next";
import { Header } from "@/shared/components/shared/header";

export const metadata: Metadata = {
    title: "Next Pizza | Главная",
    description: "Заказ пиццы"
};

export default function HomeLayout({
                                       children,
                                       modal,
                                   }: Readonly<{
    children: ReactNode;
    modal: ReactNode;
}>) {
    return (
        <main className={"min-h-screen"}>
            <Suspense>
                <Header />
            </Suspense>
            {children}
            {modal}
        </main>
    );
}
