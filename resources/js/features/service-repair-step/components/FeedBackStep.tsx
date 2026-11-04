import {
    Alert,
    AlertIcon,
    Box,
    Button,
    HStack,
    Text,
    VStack,
    Flex,
    Divider,
    SimpleGrid,
    GridItem,
    Heading,
} from "@chakra-ui/react";
import { BaseInput } from "@/shared/ui";
import { BaseModal } from "@/shared/ui";
import BaseSelect from "@/shared/ui/base/BaseSelect";
import BaseRadioGroup from "@/shared/ui/base/BaseRadioGroup";
import BaseTextarea from "@/shared/ui/base/BaseTextarea";
import BaseCheckboxGroup from "@/shared/ui/base/BaseCheckboxGroup";
import type { ServiceRequest } from "../../service-request/types/service-request";
import { useRepairMaintenance } from "../../repair-maintenance/hooks/useRepairMaintenance";
import { useState } from "react";

interface FeedBackStepProps {
    request: ServiceRequest | null;
    isLoading?: boolean;
}

export default function FeedBackStep({
    request,
    isLoading = false,
}: FeedBackStepProps) {
    // if (!request) return null;
    const { form, setField, handleSubmit } = useRepairMaintenance();

    const feedBackRating = [
        {
            value: "5",
            label: "Outstanding (5)",
        },
        {
            value: "4",
            label: "Very satisfactory (4)",
        },
        {
            value: "3",
            label: "Satisfactory (3)",
        },
        {
            value: "2",
            label: "Unsatisfactory (2)",
        },
        {
            value: "1",
            label: "Poor (1)",
        },
    ];


    return (
        <form onSubmit={handleSubmit}>

            <Box
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                overflow="hidden"
                mb={6}
            >
                <Box p={5}>

                    {/* =====================================================
                    TECHNICAL REVIEW
                    ===================================================== */}
                    {/* <Box mb={6}>
                        <Heading size="xs" color="gray.600" mb={4}>
                            Technical Review & Verification
                        </Heading>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                            <Box
                                p={4}
                                bg="gray.50"
                                borderWidth="1px"
                                borderColor="gray.200"
                                borderRadius="md"
                            >
                                <Text
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    color="gray.500"
                                    mb={1}
                                >
                                    REVIEWED BY
                                </Text>

                                <Text fontWeight="semibold" color="gray.800">
                                    Juan Dela Cruz
                                </Text>

                                <Text mt={1} fontSize="xs" color="gray.500">
                                    Head, ICTU Unit / IT Officer
                                </Text>
                            </Box>

                            <Box
                                p={4}
                                bg="gray.50"
                                borderWidth="1px"
                                borderColor="gray.200"
                                borderRadius="md"
                            >
                                <Text
                                    fontSize="xs"
                                    fontWeight="semibold"
                                    color="gray.500"
                                    mb={1}
                                >
                                    DATE & TIME REVIEWED
                                </Text>

                                <Text fontWeight="semibold" color="gray.800">
                                    November 3, 2026 · 3:00 PM
                                </Text>
                            </Box>
                        </SimpleGrid>
                    </Box> */}


                    {/* =====================================================
                    END-USER ACCEPTANCE
                    ===================================================== */}
                    <Box>
                        <Heading size="xs" color="gray.600" mb={4}>
                            Client Acceptance & Acknowledgement
                        </Heading>

                        {/* Acceptance Statement */}
                        <Box
                            p={4}
                            mb={5}
                            bg="gray.50"
                            borderLeftWidth="4px"
                            borderLeftColor="blue.400"
                            borderRadius="md"
                        >

                            <Text
                                fontSize="sm"
                                lineHeight="1.7"
                                color="gray.600"
                            >
                                I acknowledge receipt of the above ICT
                                equipment. It has been tested in my presence and
                                is found to be in satisfactory operating
                                condition.
                            </Text>
                        </Box>

                        {/* Feedback */}
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                            <GridItem colSpan={{ base: 1, md: 2 }}>
                                <BaseRadioGroup
                                    label="Service Feedback Rating"
                                    name="service_feedback_rating"
                                    isRequired
                                    options={feedBackRating}
                                />
                            </GridItem>

                            <BaseInput
                                label="Accepted By"
                                placeholder="e.g., Juan Dela Cruz"
                                isRequired
                            />

                            <Box>
                                <Text fontSize="sm" color="gray.500" mb={2}>
                                    Date & Time Received
                                </Text>

                                <BaseInput
                                    label="Date"
                                    type="datetime-local"
                                    value=""
                                    isDisabled
                                />
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
            {/* =========================================================
                FORM ACTIONS
            ========================================================= */}
        </form>
    );
}
