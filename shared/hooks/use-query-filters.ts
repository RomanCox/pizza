import {useRouter} from "next/navigation";
import {useEffect} from "react";
import qs from "qs";
import {IFilters} from "@/shared/hooks/use-filters";

export const useQueryFilters = (filters: IFilters) => {
    const router = useRouter();

    useEffect(() => {
        const params = {
            ...filters.prices,
            pizzaTypes: Array.from(filters.pizzaTypes),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients),
        };

        const query = qs.stringify(params, {
            arrayFormat: 'comma',
        });

        router.push(`?${query}`, {scroll: false});
    }, [filters, router]);
}