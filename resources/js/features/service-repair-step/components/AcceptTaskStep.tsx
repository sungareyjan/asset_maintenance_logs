import {
    Alert,
    AlertIcon,
    Box,
    Text,
    VStack,
    Flex,
    Divider,
} from "@chakra-ui/react";

import type { ServiceRequest } from "../../service-request-repair/types/service-request";

import { FaHotel, FaUser } from "react-icons/fa";

interface AcceptTaskStepProps {
    request: ServiceRequest | null;
}

export default function AcceptTaskStep({
    request,
}: AcceptTaskStepProps) {
    return (
        <VStack align="stretch" spacing={5}>
            {/* =====================================================
                REQUEST IDENTIFICATION
            ===================================================== */}
            <Flex
                justify="space-between"
                align="center"
                px={4}
                py={3}
                bg="gray.50"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="md"
            >
                <Box>
                    <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="gray.500"
                        textTransform="uppercase"
                    >
                        Service Request
                    </Text>

                    <Text
                        mt={0.5}
                        fontSize="md"
                        fontWeight="bold"
                        color="gray.800"
                    >
                        {/* {request.id} */}
                    </Text>
                </Box>

                <Box
                    px={3}
                    py={1}
                    bg="blue.50"
                    color="blue.700"
                    borderRadius="full"
                >
                    <Text
                        fontSize="xs"
                        fontWeight="semibold"
                    >
                        QUEUED
                    </Text>
                </Box>
            </Flex>

            {/* =====================================================
                ASSIGNMENT NOTICE
            ===================================================== */}
            <Alert
                status="info"
                borderRadius="md"
                alignItems="flex-start"
            >
                <AlertIcon mt={0.5} />

                <Box>
                    <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="blue.800"
                    >
                        You are accepting this service request
                    </Text>

                    <Text
                        mt={1}
                        fontSize="xs"
                        color="blue.700"
                    >
                        You will be assigned as the responsible ICTU
                        technician for this task.
                    </Text>
                </Box>
            </Alert>

            {/* =====================================================
                REQUEST DETAILS
            ===================================================== */}
            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="md"
                overflow="hidden"
            >
                {/* Requester */}
                <Flex
                    px={4}
                    py={3}
                    align="center"
                    gap={3}
                >
                    <Flex
                        w="36px"
                        h="36px"
                        align="center"
                        justify="center"
                        bg="blue.50"
                        color="blue.600"
                        borderRadius="md"
                        flexShrink={0}
                    >
                        <FaUser size={17} />
                    </Flex>

                    <Box minW={0}>
                        <Text
                            fontSize="xs"
                            color="gray.500"
                            fontWeight="medium"
                        >
                            REQUESTER
                        </Text>

                        <Text
                            fontSize="sm"
                            fontWeight="semibold"
                            color="gray.800"
                            noOfLines={1}
                        >
                            {/* {request.requester} */}
                        </Text>
                    </Box>
                </Flex>

                <Divider />

                {/* Office */}
                <Flex
                    px={4}
                    py={3}
                    align="center"
                    gap={3}
                >
                    <Flex
                        w="36px"
                        h="36px"
                        align="center"
                        justify="center"
                        bg="blue.50"
                        color="blue.600"
                        borderRadius="md"
                        flexShrink={0}
                    >
                        <FaHotel size={16} />
                    </Flex>

                    <Box minW={0}>
                        <Text
                            fontSize="xs"
                            color="gray.500"
                            fontWeight="medium"
                        >
                            REQUESTING OFFICE
                        </Text>

                        <Text
                            fontSize="sm"
                            fontWeight="semibold"
                            color="gray.800"
                            noOfLines={1}
                        >
                            {/* {request.office} */}
                        </Text>
                    </Box>
                </Flex>
            </Box>

            {/* =====================================================
                PROBLEM DESCRIPTION
            ===================================================== */}
            <Box>
                <Text
                    mb={2}
                    fontSize="xs"
                    fontWeight="semibold"
                    color="gray.500"
                    textTransform="uppercase"
                >
                    Reported Problem
                </Text>

                <Box
                    px={4}
                    py={3}
                    bg="gray.50"
                    borderLeftWidth="3px"
                    borderLeftColor="blue.400"
                    borderRadius="md"
                >
                    <Text
                        fontSize="sm"
                        lineHeight="1.7"
                        color="gray.700"
                    >
                        {/* {request.problemDescription ||
                            "No problem description provided."} */}
                    </Text>
                </Box>
            </Box>

            {/* =====================================================
                STATUS TRANSITION
            ===================================================== */}
            <Flex
                align="center"
                gap={2}
                px={1}
            >
                <Box
                    w="7px"
                    h="7px"
                    borderRadius="full"
                    bg="blue.500"
                    flexShrink={0}
                />

                <Text
                    fontSize="xs"
                    color="gray.500"
                >
                    After acceptance, this request will move to{" "}
                    <Text
                        as="span"
                        fontWeight="semibold"
                        color="blue.600"
                    >
                        In Progress
                    </Text>
                    .
                </Text>
            </Flex>
        </VStack>
    );
}