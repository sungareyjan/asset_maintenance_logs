import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FiInbox, FiPlus } from "react-icons/fi";

interface EmptyStateProps {
    title?: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
}

export function EmptyState({
    title = "No records found",
    description = "There are no records to display.",
    actionLabel,
    onAction,
}: EmptyStateProps) {
    return (
        <Box
            py={12}
            px={6}
            textAlign="center"
        >
            <VStack spacing={3}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w="48px"
                    h="48px"
                    borderRadius="full"
                    bg="gray.100"
                    color="gray.500"
                >
                    <FiInbox size={22} />
                </Box>

                <Heading
                    size="sm"
                    fontWeight="600"
                    color="gray.700"
                >
                    {title}
                </Heading>

                <Text
                    fontSize="sm"
                    color="gray.500"
                    maxW="420px"
                >
                    {description}
                </Text>

                {actionLabel && onAction && (
                    <Button
                        mt={2}
                        size="sm"
                        colorScheme="blue"
                        leftIcon={<FiPlus />}
                        onClick={onAction}
                    >
                        {actionLabel}
                    </Button>
                )}
            </VStack>
        </Box>
    );
}