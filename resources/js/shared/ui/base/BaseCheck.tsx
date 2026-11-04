import {
    Checkbox,
    type CheckboxProps,
} from "@chakra-ui/react";

interface BaseCheckProps extends CheckboxProps {
    label: string;
}

export default function BaseCheck({
    label,
    ...props
}: BaseCheckProps) {
    return (
        <Checkbox
            size="md"
            colorScheme="blue"
            {...props}
        >
            {label}
        </Checkbox>
    );
}