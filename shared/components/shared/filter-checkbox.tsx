import {memo, ReactNode} from "react";

import {cn} from "@/shared/lib/utils";

import {Checkbox} from "@/shared/components/ui";

export interface FilterCheckboxProps {
    className?: string;
    text: string;
    value: string;
    name?: string;
    endAdornment?: ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox = memo((props: FilterCheckboxProps) => {
    const {
        className,
        text,
        value,
        endAdornment,
        onCheckedChange,
        checked,
        name,
    } = props;

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className={"rounded-[8px] w-6 h-6"}
                id={`checkbox-${String(name)}-${String(value)}`}
            />
            <label
                htmlFor={`checkbox-${String(name)}-${String(value)}`}
                className={"leading-none cursor-pointer flex-1"}
            >
                {text}
            </label>
            {endAdornment}
        </div>
    );
});

FilterCheckbox.displayName = "FilterCheckbox";
