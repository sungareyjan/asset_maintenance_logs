import {
    Button,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    Icon,
} from "@chakra-ui/react";

import { FiFilter, FiSearch } from "react-icons/fi";

export default function ServiceRequestToolbar() {
    return (
        <Flex
            direction={{
                base: "column",
                lg: "row",
            }}
            gap={3}
            p={4}
            borderBottom="1px"
            borderColor="gray.200"
        >
            {/* Search */}
            <InputGroup
                maxW={{
                    lg: "360px",
                }}
            >
                <InputLeftElement pointerEvents="none">
                    <Icon as={FiSearch} color="gray.400" />
                </InputLeftElement>

                <Input
                    placeholder="Search requests..."
                    size="sm"
                />
            </InputGroup>

            {/* Status Filter */}
            <Select
                placeholder="All Status"
                size="sm"
                maxW={{
                    lg: "180px",
                }}
            >
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
            </Select>

            {/* Priority Filter */}
            <Select
                placeholder="All Priorities"
                size="sm"
                maxW={{
                    lg: "180px",
                }}
            >
                <option value="urgent">Urgent</option>
                <option value="high">High</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
            </Select>

            {/* Additional Filters */}
            <Button
                leftIcon={<FiFilter />}
                variant="outline"
                size="sm"
            >
                Filters
            </Button>
        </Flex>
    );
}