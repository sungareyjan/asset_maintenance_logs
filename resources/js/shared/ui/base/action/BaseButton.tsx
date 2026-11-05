import { Button, ButtonProps } from "@chakra-ui/react";

interface BaseButtonProps extends ButtonProps {
    loading?: boolean;
}

export default function BaseButton({
    loading,
    children,
    ...props
}: BaseButtonProps) {
    return (
        <Button
            {...props}
            isLoading={loading}
        >
            {children}
        </Button>
    );
}