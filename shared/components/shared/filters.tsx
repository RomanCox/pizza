"use client";

import {memo, useEffect, useMemo, useState} from "react";
import {useSearchParams} from "next/navigation";
import {useSet} from "react-use";
import qs from "qs";

import {cn} from "@/shared/lib/utils";
import {useIngredients} from "@/shared/hooks/useIngredients";

import {Title} from "@/shared/components/shared/title";
import {Input} from "@/shared/components/ui";
import {RangeSlider} from "@/shared/components/shared/range-slider";
import {CheckboxFiltersGroup} from "@/shared/components/shared/checkbox-filters-group";

interface FiltersProps {
    className?: string
}

interface IPriceRange {
    priceFrom?: number;
    priceTo?: number;
}

interface IQueryFilters extends IPriceRange {
    pizzaTypes: string;
    sizes: string;
    ingredients: string;
}

export const Filters = memo(({className}: FiltersProps) => {
    const searchParams = useSearchParams() as unknown as Map<keyof IQueryFilters, string>;

    const {ingredients, loading, selectedIngredients, onAddId} = useIngredients(searchParams.get('ingredients')?.split(","));

    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []));
    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(searchParams.has("pizzaTypes") ? searchParams.get("pizzaTypes")?.split(",") : []));

    const [prices, setPrices] = useState<IPriceRange>({
        priceFrom: Number(searchParams.get("priceFrom")) || undefined,
        priceTo: Number(searchParams.get("priceTo")) || undefined,
    });

    const updatePrice = (name: keyof IPriceRange, value: number) => {
        setPrices({
            ...prices,
            [name]: value,
        });
    };

    const items = useMemo(() => 
        ingredients.map(item => ({value: String(item.id), text: item.name})),
        [ingredients]);

    const filters = useMemo(() => ({
        ...prices,
        pizzaTypes: Array.from(pizzaTypes),
        sizes: Array.from(sizes),
        ingredients: Array.from(selectedIngredients),
    }), [pizzaTypes, prices, selectedIngredients, sizes]);

    useEffect(() => {
        // const filters = {
        //     ...prices,
        //     pizzaTypes: Array.from(pizzaTypes),
        //     sizes: Array.from(sizes),
        //     ingredients: Array.from(selectedIngredients),
        // };
        
        const query = qs.stringify(filters, {
            arrayFormat: 'comma',
        });
        //TODO do this with router.push(`?${query}`, {scroll: false});
        const newUrl = `${window.location.pathname}?${query}`;
        window.history.replaceState(null, '', newUrl);
    }, [filters]);

    return (
        <div className={cn(className)}>
            <Title text={"Фильтрация"} size={"sm"} className={"mb-5 font-bold"}/>

            <CheckboxFiltersGroup
                title="Тип теста"
                name="pizzaTypes"
                className="mb-5"
                onClickCheckbox={togglePizzaTypes}
                selected={pizzaTypes}
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Традиционное', value: '2' },
                ]}
            />

            <CheckboxFiltersGroup
                title="Тип теста"
                name="pizzaTypes"
                className="mb-5"
                onClickCheckbox={toggleSizes}
                selected={sizes}
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },
                ]}
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        value={String(prices.priceFrom)}
                        onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
                    />
                    <Input
                        type="number"
                        min={100}
                        max={1000}
                        placeholder="1000"
                        value={String(prices.priceTo)}
                        onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[
                        prices.priceFrom || 0,
                        prices.priceTo || 1000,
                    ]}
                    onValueChange={([priceFrom, priceTo]) => setPrices({ priceFrom, priceTo })}
                />
            </div>

            <CheckboxFiltersGroup
                title={"Ингридиенты"}
                className={"mt-5"}
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={onAddId}
                selected={selectedIngredients}
                name={"ingredients"}
            />
        </div>
    );
});

Filters.displayName = "Filters";
