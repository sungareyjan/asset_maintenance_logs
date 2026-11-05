import {
    Textarea,
    type TextareaProps,
} from "@chakra-ui/react";

import BaseFormControl from "./BaseFormControl";

interface BaseTextareaProps extends TextareaProps {
    label: string;
    error?: string;
}

export default function BaseTextarea({
    label,
    error,
    ...props
}: BaseTextareaProps) {
    return (
        <BaseFormControl
            label={label}
            isRequired={props.isRequired}
            error={error}
        >
            <Textarea
                size="md"
                variant="outline"
                resize="vertical"
                {...props}
            />
        </BaseFormControl>
    );
}