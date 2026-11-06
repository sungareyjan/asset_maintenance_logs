import {
    Input,
    InputGroup,
    InputLeftAddon,
    type InputProps,
} from "@chakra-ui/react";

import type { ReactNode } from "react";

type Props = Omit<InputProps, "onChange"> & {
    onChange: (value: string) => void;
    leftAddon?: string | ReactNode;
};

export default function InputField({
    onChange,
    leftAddon,
    ...props
}: Props) {
    return (
        <InputGroup
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.03)"
        >
            {leftAddon && (
                <InputLeftAddon>
                    {leftAddon}
                </InputLeftAddon>
            )}

            <Input
                {...props}
                onChange={(event) =>
                    onChange(event.target.value)
                }
            />
        </InputGroup>
    );
}