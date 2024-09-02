import {FC} from "react";

import {cn} from "@/shared/lib/utils";

import {Container} from "./container";
import {Categories} from "./categories";
import {SortPopup} from "./sort-popup";

import { Category } from "@prisma/client";

interface TopBarProps {
    categories: Category[];
    className?: string;
}

export const TopBar: FC<TopBarProps> = ({categories, className}) => {
    return (
        <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
            <Container className={"flex items-center justify-between"}>
                <Categories items={categories} />
                <SortPopup/>
            </Container>
        </div>
    );
};