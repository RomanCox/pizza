import { FC } from "react";
import { useSession } from "next-auth/react";
import { CircleUser, User } from "lucide-react";
import Link from "next/link";

import { cn } from "@/shared/lib/utils";

import { Button } from "../ui/button";


interface ProfileButtonProps {
    onClickSignIn?: () => void;
    className?: string;
}

export const ProfileButton: FC<ProfileButtonProps> = ({className, onClickSignIn}) => {
    const {data: session, status} = useSession();

    return (
        <div className={className}>
            {!session ? (
                <Button
                    onClick={onClickSignIn}
                    variant="outline"
                    className={cn("flex items-center gap-1", {"w-[105px] border-gray-500 text-white": status === "loading"})}
                    loading={status === "loading"}
                    disabled={status === "loading"}
                >
                    <User size={16}/>
                    Войти
                </Button>
            ) : (
                <Link href="/profile">
                    <Button variant="secondary" className="flex items-center gap-2">
                        <CircleUser size={18}/>
                        Профиль
                    </Button>
                </Link>
            )}
        </div>
    );
};
