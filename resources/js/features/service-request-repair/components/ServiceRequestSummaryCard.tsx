import {
    Box,
    Flex,
    Icon,
    Text,
} from "@chakra-ui/react";

import type { IconType } from "react-icons";

interface ServiceRequestSummaryCardProps {
    label: string;
    value: string | number;
    icon: IconType;
    color?: string;
}

export default function ServiceRequestSummaryCard({
    label,
    value,
    icon,
    color = "blue",
}: ServiceRequestSummaryCardProps) {
    return (
        <Box
            bg="white"
            border="1px"
            borderColor="gray.200"
            borderRadius="lg"
            p={4}
        >
            <Flex
                align="center"
                justify="space-between"
            >
                <Box>
                    <Text
                        fontSize="sm"
                        color="gray.500"
                    >
                        {label}
                    </Text>

                    <Text
                        mt={1}
                        fontSize="2xl"
                        fontWeight="700"
                        color="gray.800"
                    >
                        {value}
                    </Text>
                </Box>

                <Flex
                    w="40px"
                    h="40px"
                    align="center"
                    justify="center"
                    borderRadius="lg"
                    bg={`${color}.50`}
                    color={`${color}.500`}
                >
                    <Icon
                        as={icon}
                        boxSize={5}
                    />
                </Flex>
            </Flex>
        </Box>
    );
}