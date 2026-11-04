import {
    Select,
    type SelectProps,
} from "@chakra-ui/react";

import BaseFormControl from "./BaseFormControl";

export interface BaseSelectOption {
    value: string;
    label: string;
}

interface BaseSelectProps extends SelectProps {
    label: string;
    error?: string;
    options: BaseSelectOption[];
}

export default function BaseSelect({
    label,
    error,
    options,
    isRequired = false,
    ...props
}: BaseSelectProps) {
    return (
        <BaseFormControl
            label={label}
            isRequired={isRequired}
            error={error}
        >
            <Select
                size="md"
                variant="outline"
                isRequired={isRequired}
                {...props}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </Select>
        </BaseFormControl>
    );
}