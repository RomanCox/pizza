"use client";

import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from "react-dadata";

import { ClearButton } from "@/shared/components/shared/clear-button";

import "react-dadata/dist/react-dadata.css";

interface AddressInputProps {
    onChange?: (value?: string) => void;
}

export const AddressInput: FC<AddressInputProps> = ({onChange}) => {
    const { setValue, watch, clearErrors } = useFormContext();

    const address = watch("address");

    const onClickClear = () => {
        setValue("address", "", { shouldValidate: true });
        onChange?.("");
    };

    useEffect(() => {
        onChange?.(address);
    }, [address, onChange]);

    const suggestionValue: DaDataSuggestion<DaDataAddress> = {
        value: address,
        unrestricted_value: address,
        data: {
            postal_code: "",
            country: "",
            region_with_type: "",
            city_with_type: "",
            street_with_type: "",
            house: "",
            block: "",
            flat: "",
        } as DaDataAddress,
    };

    const handleAddressChange = (suggestion?: DaDataSuggestion<DaDataAddress>) => {
        const addressValue = suggestion?.value || "";
        setValue("address", addressValue);
        onChange?.(addressValue);
        clearErrors("address");
    };

    return (
        <div className="relative">
            <AddressSuggestions
                token="b406789df13d9df413bd003c6fd57aa533e5ab3a"
                onChange={handleAddressChange}
                value={suggestionValue}
                inputProps={{
                    className: "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    onChange: (e) => {
                        const inputValue = (e.target as HTMLInputElement).value;
                        onChange?.(inputValue);
                    },
                    placeholder: "Введите адрес..."
                }}
            />
            {address && <ClearButton onClick={onClickClear}/>}
        </div>
    );
};
