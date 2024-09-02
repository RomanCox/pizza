"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import { cn } from "@/shared/lib/utils";

import { Container } from "@/shared/components/shared/container";
import { SearchInput } from "@/shared/components/shared/search-input";
import { CartButton } from "@/shared/components/shared/cart-button";
import { ProfileButton } from "@/shared/components/shared/profile-button";
import {AuthModal} from "@/shared/components/shared/modals";

interface HeaderProps {
    className?: string;
    hasSearch?: boolean;
    hasCart?: boolean;
}

export const Header: FC<HeaderProps> = (props) => {
    const {
        className,
        hasSearch = true,
        hasCart = true,
    } = props;

    const router = useRouter();
    const [openAuthModal, setOpenAuthModal] = useState(false);

    const searchParams = useSearchParams();

    useEffect(() => {
        let toastMessage = "";

        if (searchParams.has("paid")) {
            toastMessage = "Заказ успешно оплачен! Информация отправлена на почту.";
        }

        if (searchParams.has("verified")) {
            toastMessage = "Почта успешно подтверждена!";
        }

        if (toastMessage) {
            setTimeout(() => {
                router.replace("/");
                toast.success(toastMessage, {
                    duration: 3000,
                });
            }, 1000);
        }
    }, []);

    return (
        <header className={cn("border-b", className)}>
            <Container className={"flex items-center justify-between py-8"}>
                <Link href={"/"}>
                    <div className={"flex items-center g-4"}>
                        <Image src={"/logo.png"} alt={"logo"} width={35} height={35}/>
                        <div>
                            <h1 className={"text-2xl uppercase font-black"}>Next Pizza</h1>
                            <p className={"text-sm text-gray-400 leading-3"}>вкусней уже некуда</p>
                        </div>
                    </div>
                </Link>

                {hasSearch && (
                    <div className={"mx-10 flex-1"}>
                        <SearchInput/>
                    </div>
                )}

                <div className={"flex items-center gap-3"}>
                    <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

                    <ProfileButton
                        onClickSignIn={() => setOpenAuthModal(true)}
                    />

                    {hasCart && (<CartButton/>)}
                </div>
            </Container>
        </header>
    );
};
