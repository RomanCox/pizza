import {Ingredient} from "@prisma/client";
import {useEffect, useState} from "react";
import {Api} from "@/services/api-client";
import {useSet} from "react-use";

interface ReturnProps {
    ingredients: Ingredient[];
    loading: boolean;
    selectedIngredients: Set<string>;
    onAddId: (id: string) => void;
}

export const useIngredients = (values: string[] = []): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [selectedIngredients, { toggle }] = useSet(new Set<string>(values));

    useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const ingredients = await Api.ingredients.getAll();
                setIngredients(ingredients);
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false);
            }
        }

        fetchIngredients();
    }, []);

    const setSelectedIngredients = (ids: string[]) => {
        // ids.forEach(id => {
        //     if (selectedIngredients.has(id)) {
        //         selectedIngredients.delete(id);
        //     } else {
        //         selectedIngredients.add(id);
        //     }
        // })
        ids.forEach(selectedIngredients.add)
    }

    return { ingredients, loading, selectedIngredients, onAddId: toggle }
}