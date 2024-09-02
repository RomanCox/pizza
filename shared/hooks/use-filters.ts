import {useSearchParams} from "next/navigation";
import {useSet} from "react-use";
import {useMemo, useState} from "react";

interface IPriceRange {
    priceFrom?: number;
    priceTo?: number;
}

interface IQueryFilters extends IPriceRange {
    pizzaTypes: string;
    sizes: string;
    ingredients: string;
}

export interface IFilters {
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    selectedIngredients: Set<string>;
    prices: IPriceRange;
}

interface IReturn extends IFilters {
    setPrices: (name: keyof IPriceRange, value: number) => void;
    setPizzaTypes: (value: string) => void;
    setSizes: (value: string) => void;
    setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): IReturn => {
    const searchParams = useSearchParams() as unknown as Map<keyof IQueryFilters, string>;

    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
        new Set<string>((searchParams.get("ingredients")?.split(",")))
    );

    const [sizes, { toggle: toggleSizes }] = useSet(
        new Set<string>(searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : [])
    );

    const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
        new Set<string>(searchParams.has("pizzaTypes") ? searchParams.get("pizzaTypes")?.split(",") : [])
    );

    const [prices, setPrices] = useState<IPriceRange>({
        priceFrom: Number(searchParams.get("priceFrom")) || undefined,
        priceTo: Number(searchParams.get("priceTo")) || undefined,
    });

    const updatePrice = (name: keyof IPriceRange, value: number) => {
        setPrices(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return useMemo(() => ({
        sizes,
        pizzaTypes,
        selectedIngredients,
        prices,
        setPrices: updatePrice,
        setPizzaTypes: togglePizzaTypes,
        setSizes: toggleSizes,
        setSelectedIngredients: toggleIngredients,
    }), [pizzaTypes, prices, selectedIngredients, sizes])
}