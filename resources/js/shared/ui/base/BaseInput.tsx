import {
    Input,
    type InputProps,
} from "@chakra-ui/react";

import BaseFormControl from "./BaseFormControl";

interface BaseInputProps extends InputProps {
    label: string;
    isRequired?: boolean;
}

export default function BaseInput({
    label,
    isRequired = false,
    ...props
}: BaseInputProps) {
    return (
        <BaseFormControl
            label      = {label}
            isRequired = {isRequired}
        >
            <Input
                size="md"
                variant="outline"
                {...props}
            />
        </BaseFormControl>
    );
}
