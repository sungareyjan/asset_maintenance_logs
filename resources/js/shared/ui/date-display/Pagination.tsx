import {
    Button,
    HStack,
    Text,
    Flex,
} from "@chakra-ui/react";

interface PaginationProps {
    page: number;
    perPage: number;
    total: number;
    onPageChange: (page: number) => void;
}

export function Pagination({
    page,
    perPage,
    total,
    onPageChange,
}: PaginationProps) {
    const totalPages = Math.ceil(total / perPage);

    const start =
        total === 0
            ? 0
            : (page - 1) * perPage + 1;

    const end = Math.min(
        page * perPage,
        total
    );

    const canGoPrevious = page > 1;
    const canGoNext = page < totalPages;

    return (
        <Flex
            align="center"
            justify="space-between"
            gap={4}
            px={4}
            py={3}
            borderTop="1px"
            borderColor="gray.200"
            direction={{
                base: "column",
                sm: "row",
            }}
        >
            <Text
                fontSize="sm"
                color="gray.500"
            >
                Showing {start}–{end} of {total}
            </Text>

            <HStack spacing={2}>
                <Button
                    size="sm"
                    variant="outline"
                    isDisabled={!canGoPrevious}
                    onClick={() =>
                        onPageChange(page - 1)
                    }
                >
                    Previous
                </Button>

                <Text
                    fontSize="sm"
                    color="gray.600"
                    minW="70px"
                    textAlign="center"
                >
                    {page} / {totalPages || 1}
                </Text>

                <Button
                    size="sm"
                    variant="outline"
                    isDisabled={!canGoNext}
                    onClick={() =>
                        onPageChange(page + 1)
                    }
                >
                    Next
                </Button>
            </HStack>
        </Flex>
    );
}