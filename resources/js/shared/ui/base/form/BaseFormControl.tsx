import type { ReactNode } from "react";
import {
    FormControl,
    FormLabel,
} from "@chakra-ui/react";

interface BaseFormFieldProps {
    children: ReactNode;
    isRequired?: boolean;
    isInvalid?:boolean;
    label: ReactNode;
    error?:string;
}

export default function BaseFormControl({
    children,
    isRequired = false,
    label,
    error
}: BaseFormFieldProps) {
    return (
        <FormControl isRequired={isRequired}>
            <FormLabel noOfLines={1}>{label}</FormLabel>
            {children}
        </FormControl>
    );
}
