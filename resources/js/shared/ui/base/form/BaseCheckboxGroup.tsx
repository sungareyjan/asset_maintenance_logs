import {
    CheckboxGroup,
    HStack,
    Checkbox,
    type CheckboxGroupProps,
    Flex,
    Text,
    Wrap,
    WrapItem
} from "@chakra-ui/react";

import BaseFormControl from "./BaseFormControl";
import { ReactNode } from "react";

export interface BaseCheckboxOption {
    value: string;
    label: ReactNode;
}

interface BaseCheckboxGroupProps
    extends Omit<CheckboxGroupProps, "children"> {
    label: string;
    options: BaseCheckboxOption[];
    error?: string;
    isRequired?: boolean;
}

export default function BaseCheckboxGroup({
    label,
    options,
    error,
    isRequired = false,
    ...props
}: BaseCheckboxGroupProps) {
    return (
       <BaseFormControl
    label={label}
    isRequired={isRequired}
    error={error}
>
    <CheckboxGroup {...props}>
        <Wrap
            spacing={{ base: 4, md: 6 }}
            rowGap={{ base: 3, md: 4 }}
            width="100%"
        >
            {options.map((option) => (
                <WrapItem
                    key={option.value}
                    maxW="100%"
                >
                    <Checkbox
                        value={option.value}
                        size="md"
                        colorScheme="blue"
                        alignItems="flex-start"
                    >
                        <Text
                            fontSize="sm"
                            lineHeight="1.4"
                            whiteSpace="normal"
                        >
                            {option.label}
                        </Text>
                    </Checkbox>
                </WrapItem>
            ))}
        </Wrap>
    </CheckboxGroup>
</BaseFormControl>
    );
}