import { ReactNode } from "react";
import { Nunito } from "next/font/google";
import { Providers } from "@/shared/components/shared/providers";
import "./globals.css";

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title title="next-pizza"/>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body className={nunito.className}>
            <Providers>{children}</Providers>
        </body>
        </html>
    );
}
