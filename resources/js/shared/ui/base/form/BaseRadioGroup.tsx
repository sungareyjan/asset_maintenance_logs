import {
    HStack,
    Radio,
    RadioGroup,
    Stack,
    type RadioGroupProps,
} from "@chakra-ui/react";

import BaseFormControl from "./BaseFormControl";

export interface BaseRadioOption {
    value: string;
    label: string;
}

interface BaseRadioGroupProps extends Omit<RadioGroupProps, "children"> {
    label: string;
    options: BaseRadioOption[];
    error?: string;
    isRequired?: boolean;
}

export default function BaseRadioGroup({
    label,
    options,
    error,
    isRequired = false,
    ...props
}: BaseRadioGroupProps) {
    return (
        <BaseFormControl label={label} isRequired={isRequired} error={error}>
            <RadioGroup {...props}>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 3, md: 6 }}
                >
                    {options.map((option) => (
                        <Radio key={option.value} value={option.value}>
                            {option.label}
                        </Radio>
                    ))}
                </Stack>
            </RadioGroup>
        </BaseFormControl>
    );
}
