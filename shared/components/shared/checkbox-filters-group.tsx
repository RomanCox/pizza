"use client";

import {ChangeEvent, memo, useCallback, useMemo, useState} from "react";
import {FilterCheckbox, FilterCheckboxProps} from "@/shared/components/shared/filter-checkbox";
import {Input} from "@/shared/components/ui";

interface CheckboxFiltersGroupProps {
    title: string;
    items: FilterCheckboxProps[];
    defaultItems?: FilterCheckboxProps[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup = memo((props: CheckboxFiltersGroupProps) => {
    const {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = "Поиск...",
        onChange,
        defaultValue,
        className,
    } = props;

    const [showAll, setShowAll] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");

    const onChangeSearchInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }, []);

    const list = useMemo(
        () => showAll
            ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()))
            : defaultItems?.slice(0, limit),
        [defaultItems, items, limit, searchValue, showAll]);

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
                {list?.map((checkbox, index) => (
                    <FilterCheckbox
                        key={index}
                        text={checkbox.text}
                        value={checkbox.value}
                        endAdornment={checkbox.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
                    />
                ))}
            </div>

            {items.length > length && (
                <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
                    <button
                        className={"text-primary mt-3"}
                        onClick={() => setShowAll(prev => !prev)}
                    >
                        {showAll? "Скрыть" : "+ Показать все"}
                    </button>
                </div>
            )}
        </div>
    )
});

CheckboxFiltersGroup.displayName = "CheckboxFiltersGroup";