import { ReactNode } from "react";
import { Metadata } from "next";
import { Container, Header } from "@/shared/components/shared";

export const metadata: Metadata = {
    title: "Next.js",
    description: "Generated by Next.js",
}

export default function CheckoutLayout({
                                           children,
                                       }: {
    children: ReactNode
}) {
    return (
        <main className="min-h-screen bg-[#F4F1EE]">
            <Container>
                <Header className="border-gray-200" hasSearch={false} hasCart={false}/>
                {children}
            </Container>
        </main>
    )
}