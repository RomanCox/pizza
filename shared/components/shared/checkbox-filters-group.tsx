"use client";

import {ChangeEvent, memo, useState} from "react";
import {FilterCheckbox, FilterCheckboxProps} from "@/shared/components/shared/filter-checkbox";
import {Input, Skeleton} from "@/shared/components/ui";

interface CheckboxFiltersGroupProps {
    title: string;
    items: FilterCheckboxProps[];
    defaultItems?: FilterCheckboxProps[];
    limit?: number;
    searchInputPlaceholder?: string;
    loading?: boolean;
    onClickCheckbox?: (id: string) => void;
    defaultValue?: string[];
    selected?: Set<string>;
    name: string;
    className?: string;
}

export const CheckboxFiltersGroup = memo((props: CheckboxFiltersGroupProps) => {
    const {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = "Поиск...",
        loading,
        onClickCheckbox,
        selected,
        name,
        className,
    } = props;

    const [showAll, setShowAll] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const list = showAll
            ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
            : (defaultItems || items).slice(0, limit)

    if (loading) {
        return <div className={className}>
            <p className={"font-bold mb-3"}>{title}</p>

            {...Array(limit).fill(0).map((_, index) => (
                <Skeleton key={index} className={"h-6 mb-4 rounded-[8px]"}/>
            ))}
            <Skeleton className={"w-28 h-6 mb-4 rounded-[8px]"}/>
        </div>
    }

    return (
        <div className={className}>
            <p className={"font-bold mb-3"}>{title}</p>

            {showAll && (
                <div className={"mb-5"}>
                    <Input
                        className={"bg-gray-50 border-none"}
                        placeholder={searchInputPlaceholder}
                        onChange={onChangeSearchInput}
                    />
                </div>
            )}

            <div className={"flex flex-col gap-4 max-h-96 overflow-auto scrollbar"}>
                {list.map((checkbox, index) => (
                    <FilterCheckbox
                        key={index}
                        text={checkbox.text}
                        value={checkbox.value}
                        name={name}
                        endAdornment={checkbox.endAdornment}
                        checked={selected?.has(checkbox.value)}
                        onCheckedChange={() => onClickCheckbox?.(checkbox.value)}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
                    <button
                        className={"text-primary mt-3"}
                        onClick={() => setShowAll(prev => !prev)}
                    >
                        {showAll ? "Скрыть" : "+ Показать все"}
                    </button>
                </div>
            )}
        </div>
    )
});

CheckboxFiltersGroup.displayName = "CheckboxFiltersGroup";