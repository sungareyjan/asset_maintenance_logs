import { Spinner } from "@chakra-ui/react";

type AppSpinnerProps = {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: string;
    thickness?: string;
    speed?: string;
    emptyColor?: string;
    boxSize?: string | number;
};

export default function AppSpinner({
    size = "md",
    color = "green.500",
    thickness = "5px",
    speed = "0.65s",
    emptyColor = "gray.200",
    boxSize,
}: AppSpinnerProps) {
    return (
        <Spinner
            boxSize={boxSize}
            size={size}
            color={color}
            thickness={thickness}
            speed={speed}
            emptyColor={emptyColor}
        />
    );
}
