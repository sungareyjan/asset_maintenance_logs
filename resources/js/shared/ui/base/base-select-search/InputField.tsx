import {
    Input,
    InputGroup,
    InputLeftAddon,
    InputProps,
    InputRightElement,
} from "@chakra-ui/react";
import  BaseButton  from "@/shared/ui/base/action/BaseButton";
import { type ReactNode, useState } from "react";

type Props = Omit<InputProps, "onChange"> & {
    label?: string;
    // Directly tell TypeScript this function receives a string value
    onChange: (value: string) => void;
    leftAddon?: string | ReactNode;
    size?: string;
    borderRadius?: string;
    showPasswordToggle?: boolean;
    placeholder?: string;
};

export default function InputField({
    label,
    placeholder,
    name,
    type,
    onChange,
    leftAddon,
    size,
    borderRadius,
    showPasswordToggle = false,
    ...props
}: Props) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <InputGroup size={size} boxShadow="0 2px 4px rgba(0, 0, 0, 0.03)">
            {leftAddon && (
                <InputLeftAddon
                    borderTopLeftRadius={borderRadius}
                    borderBottomLeftRadius={borderRadius}
                >
                    {leftAddon}
                </InputLeftAddon>
            )}

            <Input
                name={name}
                placeholder={placeholder}
                type={showPasswordToggle && showPassword ? "text" : type}
                pr={showPasswordToggle ? "4.5rem" : undefined}
                borderRadius={borderRadius}
                focusBorderColor="green.500"
                {...props}
                onChange={(e) => onChange(e.target.value)}
            />
            {showPasswordToggle && (
                <InputRightElement width="4.5rem">
                    <BaseButton
                        h="1.75rem"
                        size="sm"
                        variant="ghost"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </BaseButton>
                </InputRightElement>
            )}
        </InputGroup>
    );
}
